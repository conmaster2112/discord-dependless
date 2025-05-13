import ts, { Expression, Identifier } from "typescript";
import { getTypeFromType } from "./declarations";

// Print the updated source file
const PRINTER = ts.createPrinter();
const factory = ts.factory;
const REQUEST_IDENTIFIER = i("RequestJson");

export function * generateFunctions(data: any): Generator<string> {
    for(const key of Object.getOwnPropertyNames(data.paths)) {
        const value = data.paths[key];
        const parameters: any[] = value["parameters"]??[];
        for(const method of Object.getOwnPropertyNames(value)){
            if(method === "parameters") continue;
            const data = value[method];
            const functionName = snakeToCamel(data.operationId);
            const hasResponse = data.responses[200]??data.responses[201];
            const returnType = hasResponse?.content?.["application/json"]?.schema?getTypeFromType(hasResponse?.content?.["application/json"]?.schema):"void"
            const args = [...parameters.filter(e=>e.in==='path')]

            let returnStatement: Expression = factory.createNewExpression(REQUEST_IDENTIFIER, [i(returnType) as any], [buildTemplateExpressionFromPath(key), i(`RequestMethod.${method.toUpperCase()}`)]);
            
            if(data.requestBody?.content?.["application/json"]){
                args.push({ name: 'body', schema: data.requestBody?.content?.["application/json"].schema});
                returnStatement = factory.createCallExpression(factory.createPropertyAccessExpression(returnStatement, "setBody"), undefined, [
                    factory.createCallExpression(i(JSON.stringify.name),undefined, [i("body")]),
                    factory.createStringLiteral("application/json")
                ]);
            }

            const ast = factory.createFunctionDeclaration(
                [factory.createToken(ts.SyntaxKind.ExportKeyword)],
                undefined,
                i(functionName),
                undefined,
                args.map(e=>factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    i(snakeToCamel(e.name)),
                    undefined,
                    factory.createTypeReferenceNode(
                      i(getTypeFromType(e.schema)),
                      undefined
                    ),
                    undefined
                )),
                factory.createTypeReferenceNode(
                  REQUEST_IDENTIFIER,
                  [i(returnType) as any]
                ),
                factory.createBlock(
                    [factory.createReturnStatement(returnStatement)],
                  false
                )
              )
              //console.log(key, method, snakeToCamel(data.operationId));
            yield PRINTER.printNode(ts.EmitHint.Unspecified, ast, null!) + "\n";
        }
    }

}
function buildTemplateExpressionFromPath(path: string): Expression{
    const baseValues = path.split(/{[^ {}]+}/g);
    const params = [...path.matchAll(/{([^ {}]+)}/g)]
    globalThis.console.log(baseValues, snakeToCamel(params[0]?.[1]??"error"));
    if(params.length) return factory.createTemplateExpression(
        factory.createTemplateHead(baseValues[0],baseValues[0]),
        params.map((e, index)=>factory.createTemplateSpan(
            i(snakeToCamel(e[1]??"error")),
            factory[index === (params.length - 1)?"createTemplateTail":"createTemplateMiddle"](baseValues[index + 1],baseValues[index + 1]))
        )
    )
    return factory.createStringLiteral(path);
}
function _createExportFunction(identifier: string): any{
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
function i(text: string): Identifier{
    return factory.createIdentifier(text);
}