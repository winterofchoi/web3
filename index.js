function createMainWindow(){
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
}
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Client } from '@notionhq/client';
const notion = new Client({ auth: process.env.NOTION_API_KEY });
(() => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield notion.pages.create({
        "cover": {
            "type": "external",
            "external": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
            }
        },
        "parent": {
            "type": "database_id",
            "database_id": "33f400d010e84b47be4de28b76267412"
        },
        "properties": {
            "이름": {
                "title": [
                    {
                        "text": {
                            "content": "Tuscan kale"
                        }
                    }
                ]
            },
            "예쁜말": {
                "title": [
                    {
                        "text": {
                            "content": "Tuscan kale"
                        }
                    }
                ]
            },
            "Description": {
                "rich_text": [
                    {
                        "text": {
                            "content": "A dark green leafy vegetable"
                        }
                    }
                ]
            },
            "Food group": {
                "select": {
                    "name": "🥬 Vegetable"
                }
            }
        },
        "children": [
            {
                "object": "block",
                "heading_2": {
                    "rich_text": [
                        {
                            "text": {
                                "content": "Lacinato kale"
                            }
                        }
                    ]
                }
            },
            {
                "object": "block",
                "paragraph": {
                    "rich_text": [
                        {
                            "text": {
                                "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                                "link": {
                                    "url": "https://en.wikipedia.org/wiki/Lacinato_kale"
                                }
                            },
                            "href": "https://en.wikipedia.org/wiki/Lacinato_kale"
                        }
                    ],
                    "color": "default"
                }
            }
        ]
    });
    console.log(response);
}))();
