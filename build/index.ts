import { createWriteStream, writeFileSync } from "node:fs";
import process, { exit } from "node:process";
import {declarationTypes} from "./declarations";
import "./types";
import { generateFunctions } from "./types";
const {log, error} = globalThis.console;
const API_DATA_KIND = "https://github.com/discord/discord-api-spec/raw/refs/heads/main/specs/openapi.json";
const TYPES_FILE_NAME = "./src/rest-api-types.ts";
const METHOD_FILE_NAME = "./src/json-rest-api-methods.ts";
async function main(): Promise<number>{
    const INIT_TIME = performance.now();
    const response = await fetch(API_DATA_KIND).catch(()=>null);
    if(!response || !response.ok)
    {
        error(`Failed to fetch Discord OpenAPI json`);
        return 1;
    }

    const API_DATA = await response.json().catch(()=>null);
    if(!API_DATA) {
        error("Failed to parse json response")
        return 1;
    }

    writeFileSync(`./data/open.aip.${API_DATA.info.version}.json`, JSON.stringify(API_DATA, null, 2));

    const typeHandle = createWriteStream(TYPES_FILE_NAME);
    typeHandle.write(`
import { RequestJson } from "./request";
import { RequestMethod } from "./enums";
`);
    
    for(const chunk of declarationTypes(API_DATA)) typeHandle.write(chunk);
    typeHandle.write("\n");
    typeHandle.write("const {stringify} = JSON;\nexport namespace JsonAPI {\n")
    for(const chunk of generateFunctions(API_DATA)) typeHandle.write("   " + chunk);
    typeHandle.write("\n}")

    typeHandle.close();
    log(`Done in ${(performance.now() - INIT_TIME).toFixed(0)}ms`);
    return 0;
}

main().then(e=>process.exitCode = e, e=>{
    error(e);
    exit(-1);
});
