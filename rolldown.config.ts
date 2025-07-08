import {dts} from "rolldown-plugin-dts";
import { RolldownOptions} from "rolldown";
import { devDependencies } from "./package.json"

const external = new RegExp(`^(${Object.getOwnPropertyNames(devDependencies).join("|")}|node:)`)

export default [
    {
        external,
        input: {
            main:"src/index.ts"
        },
        plugins: [dts({isolatedDeclarations: true})],
        output: {
            dir: "dist",
            esModule: true,
        },
        treeshake: true,
        keepNames: true
    }
] satisfies RolldownOptions[];
