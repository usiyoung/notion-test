import { NotionAPI } from "notion-client";
import NotionClientComponent from "./client";
import { notFound } from "next/navigation";

async function fetchNotionData(id: string) {
    if (!id) return null;

    try {
        const notion = new NotionAPI();
        const recordMap = await notion.getPage(id);
        return recordMap;
    } catch (error) {
        console.error("Notion API Error:", error);
        return null;
    }
}

export default async function NotionPage({ params }: { params: { id: string } }) {
    const { id } = params;

    const recordMap = await fetchNotionData(id);

    if (!recordMap) {
        notFound();
    }

    return <NotionClientComponent recordMap={recordMap} />;
}