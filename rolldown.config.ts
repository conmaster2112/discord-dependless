import { RolldownOptions} from "rolldown";
import { devDependencies, main } from "./package.json"

const external = new RegExp(`^(${Object.getOwnPropertyNames(devDependencies).join("|")}|node:)`)

export default [
    {
        external,
        input: "build/index.ts",
        platform: "node",
        output: {
            file: "dist/build.js"
        }
    },
    {
        external,
        input: "src/index.ts",
        platform: "node",
        output: {
            file: main,
            esModule: true,
            minify: true,
        },
        treeshake: true,
        keepNames: true
    },
    {
        external,
        input: "test/index.ts",
        platform: "node",
        output: {
            file: "dist/test.js"
        }
    }
] satisfies RolldownOptions[];
