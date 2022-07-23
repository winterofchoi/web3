"use strict";
export const content = ["./scr/**/*.{html,js}"];
export const theme = {
    extend: {},
};
export const Plugins = [];
Object.defineProperty(exports, "__esModule", { value: true });
import { basename } from "path";
import { useForm } from "react-hook-form";
import tailwindConfig from "./src/tailwind.config";
function add() {
    const { register, handleSubmit } = (0, useForm)();
    const onSubmit = (data) => {
        fetch("https://www.notion.so/winterchoi-5680f12793a24d27b3a8a1ae94827b86.dev/", { method: "POST",
            body: JSON.stringify({
                이름,
                예쁜말,
            }),
        });
    };
    return (
        <main classname="bg-neutral-300 min-h-screen py-10 px-5"> 
            <h1 classname="text-7xl font-semibold pb-7 mb-7 border-b">
                add a saying
                </h1>
                <form>
                    <input classname="w-full block mb- px-5 py-7 rounded-full
                    text-xl" {...register("name", { required: true })} type="text" placeholder="이름"/>
                    <input classname="w-full block mb- px-5 py-7 rounded-full
                    text-xl" {...register("name", { required: true })} type="text" placeholder="예쁜말"/>
                    <input classname="w-full block mb- px-5 py-7 rounded-full
                    text-xl" {...register("name", { required: true })} type="text" placeholder="보내기"/>
                </form>
                </main>);
    async;
    fetch(request, Request, env, Env, ctx, ExecutionContext);
    Promise < Response > {
        if(request) { }, : .method === "GET"
    };
    {
        const data = await(yield fetch("https://api.notion.com/v1/databases/33f400d010e84b47be4de28b76267412/query", {
            headers: {
                'Authorization: Bearer ${env.NOTION_TOKEN}': "Notion-Version", "2022-06-28": ,
            },
            method: "POST",
        })).json();
        return new Response(JSON.stringify(data), {
            headers: {
                "content-type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
                "Access-Control-Max-Age": "86400",
            },
        });
    }
}
const _default = add;
export { _default as default };
;
