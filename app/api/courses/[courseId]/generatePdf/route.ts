import { Template, BLANK_PDF } from "@pdfme/common";
import { generate } from "@pdfme/generator";
import fs from "fs";
import path from "path";
import { NextApiResponse, NextApiRequest } from "next";

const template: Template = {
  basePdf: BLANK_PDF,
  schemas: [
    {
      a: {
        type: "text",
        position: { x: 0, y: 0 },
        width: 10,
        height: 10,
      },
      b: {
        type: "text",
        position: { x: 10, y: 10 },
        width: 10,
        height: 10,
      },
      c: {
        type: "text",
        position: { x: 20, y: 20 },
        width: 10,
        height: 10,
      },
    },
  ],
};

const inputs = [{ a: "a1", b: "b1", c: "c1" }];

export async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const pdf = await generate({ template, inputs });

    // Node.js
    const filePath = path.join(process.cwd(), "test.pdf");
    fs.writeFileSync(filePath, pdf);

    res
      .status(200)
      .json({ success: true, message: "PDF generated successfully" });
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).json({ success: false, error: "Failed to generate PDF" });
  }
}
