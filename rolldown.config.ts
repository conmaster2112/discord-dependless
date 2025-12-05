import { dts } from "rolldown-plugin-dts";
import { RolldownOptions } from "rolldown";
import { devDependencies } from "./package.json"

const external = new RegExp(`^(${Object.getOwnPropertyNames(devDependencies).join("|")}|node:)`)

export default [
    {
        external,
        input: {
            main: "src/index.ts",
            rest: "src/rest/index.ts"
        },
        plugins: [dts({ oxc: true })],
        output: {
            dir: "dist",
            keepNames: true,
            cleanDir: true,
        },
        treeshake: true,
    }
] satisfies RolldownOptions[];
