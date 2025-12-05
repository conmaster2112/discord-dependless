import ts, { Expression, Identifier, ModifierFlags } from "typescript";
import { getTypeFromType } from "./declarations";

// Print the updated source file
const PRINTER = ts.createPrinter();
const factory = ts.factory;
const REQUEST_IDENTIFIER = i("RequestJson");

export function* generateFunctions(data: any): Generator<string> {
  for (const key of Object.getOwnPropertyNames(data.paths)) {
    const value = data.paths[key];
    const parameters: any[] = value["parameters"] ?? [];
    for (const method of Object.getOwnPropertyNames(value)) {
      if (method === "parameters") continue;
      const data = value[method];
      const functionName = snakeToCamel(data.operationId);
      const hasResponse = data.responses[200] ?? data.responses[201];
      const hasBody = Boolean(data.requestBody?.content?.["application/json"])
      const returnType = hasResponse?.content?.["application/json"]?.schema ? getTypeFromType(hasResponse?.content?.["application/json"]?.schema) : "void"
      const args = [...parameters.filter(e => e.in === 'path')]

      if (hasBody) args.push({ name: 'body', schema: data.requestBody?.content?.["application/json"].schema });

      const codeArgs =
        args.map(e => factory.createParameterDeclaration(
          undefined,
          undefined,
          i(snakeToCamel(e.name)),
          undefined,
          factory.createTypeReferenceNode(
            i(getTypeFromType(e.schema)),
            undefined
          ),
          undefined
        ));

      const params = (data.parameters ?? []).filter((e: any) => e.in === "query");
      const EXPRESSIONS: (ts.Statement)[] = [
        factory.createVariableStatement(undefined, factory.createVariableDeclarationList([
          factory.createVariableDeclaration("path", undefined, undefined, buildTemplateExpressionFromPath(key, []))
        ], ts.NodeFlags.Let))
      ]
      if (params.length > 0) {
        codeArgs.push(factory.createParameterDeclaration(
          undefined,
          undefined,
          "query", factory.createToken(ts.SyntaxKind.QuestionToken),
          factory.createTypeLiteralNode(params.map((e: any) => factory.createPropertySignature(undefined, e.name, factory.createToken(ts.SyntaxKind.QuestionToken), factory.createTypeReferenceNode(getTypeFromType(e.schema)))))
        ))
        EXPRESSIONS.push(factory.createIfStatement(
          factory.createIdentifier("query"),
          factory.createExpressionStatement(factory.createBinaryExpression(
            factory.createIdentifier("path"),
            factory.createToken(ts.SyntaxKind.PlusEqualsToken),
            factory.createCallExpression(
              factory.createIdentifier("setQuery"),
              undefined,
              [factory.createIdentifier("query")]
            )
          )),
          undefined
        ));
      }

      let returnStatement: Expression = factory.createNewExpression(
        REQUEST_IDENTIFIER,
        [i(returnType) as any],
        [
          i("path"),
          i(`RequestMethod.${method.toUpperCase()}`)
        ]);
      if (hasBody) returnStatement = factory.createCallExpression(factory.createPropertyAccessExpression(returnStatement, "setBody"), undefined, [
        factory.createCallExpression(i(JSON.stringify.name), undefined, [i("body")]),
        factory.createStringLiteral("application/json")
      ]);

      EXPRESSIONS.push(factory.createReturnStatement(returnStatement));
      const ast = factory.createFunctionDeclaration(
        [factory.createToken(ts.SyntaxKind.ExportKeyword)],
        undefined,
        i(functionName),
        undefined,
        codeArgs,
        factory.createTypeReferenceNode(
          REQUEST_IDENTIFIER,
          [i(returnType) as any]
        ),
        factory.createBlock(
          EXPRESSIONS as any,
          false
        )
      )
      //console.log(key, method, snakeToCamel(data.operationId));
      yield PRINTER.printNode(ts.EmitHint.Unspecified, ast, null!) + "\n";
    }

  }
  yield `
function setQuery(query: object): string{
   const queries = Object.entries(query).filter(e=>e[1]!==undefined).map(([n,v])=>n+"="+v);
   if(queries.length) return "?" + queries.join("$");
   return "";
}`
}
function buildTemplateExpressionFromPath(path: string, query: { name: string, schema?: string }[]): Expression {
  const baseValues = path.split(/{[^ {}]+}/g);
  const params = [...path.matchAll(/{([^ {}]+)}/g)]
  globalThis.console.log(baseValues, snakeToCamel(params[0]?.[1] ?? "error"));
  const codeDirectly: ts.Expression[] = params.map(e => i(snakeToCamel(e[1] ?? "error")))
  if (query.length) {
    query.forEach((e, index) => {
      if (index === 0) baseValues[baseValues.length - 1] += "?" + e.name + "=";
      else baseValues.push(`&${e.name}=`)
      codeDirectly.push(factory.createBinaryExpression(
        factory.createPropertyAccessChain(
          i("query"),
          factory.createToken(ts.SyntaxKind.QuestionDotToken),
          i(e.name)
        ),
        ts.SyntaxKind.QuestionQuestionToken,
        factory.createStringLiteral("")
      ));
    });
  }
  if (codeDirectly.length) return factory.createTemplateExpression(
    factory.createTemplateHead(baseValues[0], baseValues[0]),
    codeDirectly.map((e, index) => factory.createTemplateSpan(
      e,
      factory[index === (codeDirectly.length - 1) ? "createTemplateTail" : "createTemplateMiddle"](baseValues[index + 1] ?? "", baseValues[index + 1] ?? ""))
    )
  )
  return factory.createStringLiteral(path);
}
function _createExportFunction(identifier: string): any {
  return factory.createFunctionDeclaration(
    [factory.createToken(ts.SyntaxKind.ExportKeyword)],
    undefined,
    factory.createIdentifier(identifier),
    undefined,
    [factory.createParameterDeclaration(
      undefined,
      undefined,
      factory.createIdentifier("channel"),
      undefined,
      factory.createTypeReferenceNode(
        factory.createIdentifier("DiscordType"),
        undefined
      ),
      undefined
    )],
    factory.createTypeReferenceNode(
      factory.createIdentifier("Promise"),
      [factory.createTypeReferenceNode(
        factory.createIdentifier("Result"),
        undefined
      )]
    ),
    factory.createBlock(
      [],
      false
    )
  )
}
function snakeToCamel(snakeStr: string): string {
  return snakeStr.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
function i(text: string): Identifier {
  return factory.createIdentifier(text);
}