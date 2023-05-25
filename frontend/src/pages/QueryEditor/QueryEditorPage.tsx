import React from 'react'
import SavedQueries from './SavedQueries'
import QueryEditor from './QueryEditor'
import { Tabs } from 'antd'




export default function QueryEditorPage() {


    return (
        <>
            <h1 style={{ textAlign: 'left' }}>Query editor</h1>

            <Tabs
            items={[
                {
                    key: 'run',
                    label: `Run query`,
                    children: <QueryEditor />,
                },
                {
                    key: 'saved_queries',
                    label: `Saved queries`,
                    children: <SavedQueries />,
                },
            ]}
            defaultActiveKey="run"
            />
        </>
    )
}
