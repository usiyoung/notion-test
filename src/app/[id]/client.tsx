"use client";

import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'
import {ExtendedRecordMap} from "notion-types";

export default function NotionClientComponent({ recordMap }: { recordMap: ExtendedRecordMap }) {
    return (
        <div>
            <NotionRenderer
                components={{
                    Collection,
                    Modal,
                    Code,
                    Equation,
                    Pdf
                }}
                recordMap={recordMap}
                fullPage={true}
                darkMode={false}
            />
        </div>
    );
}