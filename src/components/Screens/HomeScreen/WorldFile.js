import React, { useEffect, useState } from "react";
import { DownloadFile } from "../../Services/Service"
import {
    AlignmentType,
    BorderStyle,
    convertInchesToTwip,
    Document,
    HeadingLevel,
    TextRun,
    Packer,
    Paragraph,
    ShadingType,
    Table,
    TableCell,
    TableRow,
    ImageRun,
    WidthType,
} from "docx"
import { saveAs } from "file-saver";
import { fontWeight } from "@mui/system";
import { size } from "lodash";

function HomeScreen(props) {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    // const download = () => {
    //     setLoading(true)

    // }

    // useEffect(() => {
    //     download()
    // });
    const generateFromUrl = async () => {
        const blob = await fetch(
            "https://raw.githubusercontent.com/dolanmiu/docx/master/demo/images/cat.jpg"
        ).then(r => r.blob());

        const doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph("Hello World"),
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    data: blob,
                                    transformation: {
                                        width: 100,
                                        height: 100
                                    }
                                })
                            ]
                        })
                    ]
                }
            ]
        });

        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, "example.docx");
            console.log("Document created successfully");
        });
    }

    const BUTTON = async () => {
        const blob = await fetch(
            "https://raw.githubusercontent.com/Bill92005/images/main/Group%2024.png"
        ).then(r => r.blob());
        setLoading(true)
        DownloadFile().then((res) => {

            const logo = new Paragraph({
                children: [
                    new ImageRun({
                        data: blob,
                        transformation: {
                            width: 130,
                            height: 50
                        }
                    })
                ]
            })



            const table4 = new Table({
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Key Demo Information",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ],

                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "D9D9D9",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Video Name",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({ text: res && res.data.video_name })],
                                width: { size: 50, type: WidthType.PERCENTAGE },

                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Product Name",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.first_product_name
                                })],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Product URL",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.first_product_url
                                })],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({

                                children: [new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "2ND Product Name (if applicable)",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.second_product_name
                                })],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "2ND Product URL (if applicable)",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.second_product_url
                                })],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Industry",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.industry
                                })],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Line of Business",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.line_of_business
                                })],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Domain/RBA Process",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.domain
                                })],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Summary/Description",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.description
                                })],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Draft Owner",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.created_by
                                })],
                            }),
                        ],
                    }),
                ],
                width: {
                    size: 100,
                    type: WidthType.PERCENTAGE,
                },
                margins: {
                    top: convertInchesToTwip(0.10),
                    bottom: convertInchesToTwip(0.10),
                    right: convertInchesToTwip(0.10),
                    left: convertInchesToTwip(0.10),
                },
            });
            const table5 = new Table({
                rows: [
                    new TableRow({
                        children: [

                            new TableCell({
                                shading: {
                                    fill: "D9D9D9",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Voice Over",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                            new TableCell({
                                shading: {
                                    fill: "D9D9D9",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Visuals",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Grabber",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "4FB81C",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.intro
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Introduction",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "70AD47",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.intro_solution
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Benefit #1",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "008FD3",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.business_outcomes
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Demo # 1",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "E35500",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.selected_demo_one
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Benefit #2",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "008FD3",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.business_outcomes_two
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Demo # 2",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "E35500",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.selected_demo_two
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Benefit #3",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "008FD3",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.business_outcomes_three
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Demo # 3",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "E35500",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.selected_demo_three
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Benefit #4",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "008FD3",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.business_outcomes_four
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Demo # 4",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "E35500",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.selected_demo_four
                                },)],
                                width: { size: 50, type: WidthType.PERCENTAGE },
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),


                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Outro",
                                            style: "strong",
                                            bold: true,
                                        }),
                                    ]
                                })],
                                columnSpan: 2,
                                shading: {
                                    fill: "970A82",
                                    type: ShadingType.CLEAR,
                                    color: "auto",
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: res && res.data.outro
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph("")],
                            }),
                        ],
                    }),

                ],
                // width: {
                //     size: 100,
                //     type: WidthType.AUTO,
                // },
                // columnWidths: [convertInchesToTwip(2.69), convertInchesToTwip(2.69), convertInchesToTwip(2.69)],

                width: {
                    size: 100,
                    type: WidthType.PERCENTAGE,
                },
                margins: {
                    top: convertInchesToTwip(0.08),
                    bottom: convertInchesToTwip(0.08),
                    right: convertInchesToTwip(0.08),
                    left: convertInchesToTwip(0.08),
                },
            });

            const doc = new Document({
                sections: [
                    {
                        children: [
                            logo,
                            new Paragraph({
                                spacing: {
                                    after: 300,
                                },
                            }),
                            new Paragraph({
                                spacing: {
                                    after: 200,
                                },
                                children: [
                                    new TextRun({
                                        text: "SPOTLIGHT Demo Video Script Template*",
                                        style: "strong",
                                        bold: true,
                                        size: 26
                                    }),
                                ]
                            }),
                            table4,
                            new Paragraph({
                                spacing: {
                                    after: 300,
                                },
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "To ensure 2-minutes or less, please ensure the script section has 270 words or less.For 5 minutes or less, please use 750 words or less.",
                                        style: "strong",
                                        bold: false,
                                        size: 22
                                    }),
                                ]
                            }),
                            new Paragraph({
                                spacing: {
                                    after: 300,
                                },
                            }),
                            table5,
                            new Paragraph({
                                spacing: {
                                    after: 300,
                                },
                            }),

                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "*These spotlight demo videos follow a benefit/demo, benefit/demo format.  This release of the script combines the highlight, deep dive and release highlight into a single template",
                                        style: "strong",
                                        bold: false,
                                        size: 22
                                    }),
                                ]
                            }),

                        ],
                    },
                ],
            });

            Packer.toBlob(doc).then(blob => {
                console.log(blob);
                saveAs(blob, res && res.data.video_name);
                console.log("Document created successfully");
            });
            // const mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            // // Create a Blob object from Packer containing the Document instance and the mimeType
            // Packer.toBlob(doc).then((blob) => {
            //     const docblob = blob.slice(0, blob.size, mimeType);
            //     // Save the file using saveAs from the file-saver package
            //     saveAs(docblob, res && res.data.video_name);
            // });
            setLoading(false)
        })
    }

    return (
        <div>
            <button className="btn cuss_btn" onClick={BUTTON}>
                {
                    loading == true ?
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                        : "Download"
                }
            </button>
        </div>
    );

}

export default HomeScreen;
