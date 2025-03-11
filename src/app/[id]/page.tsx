import { NotionAPI } from "notion-client";
import NotionClientComponent from "./client";
import { notFound } from "next/navigation";

async function fetchNotionData(id: string) {
    if (!id) return null;

    try {
        const notion = new NotionAPI();
        return await notion.getPage(id);
    } catch (error) {
        console.error("Notion API Error:", error);
        return null;
    }
}

export type paramsType = Promise<{ id: string }>;
export default async function NotionPage(props: { params: paramsType }) {
    const { id } = await props.params;

    const recordMap = await fetchNotionData(id);

    if (!recordMap) {
        notFound();
    }

    return <NotionClientComponent recordMap={recordMap} />;
}