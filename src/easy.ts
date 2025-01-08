import typia from "typia";

import { bench, group, summary } from "mitata";

const stringifyDirAssign = typia.json.createStringify<DirAssign>();

const validationStringifyDirAssign = typia.json.createIsStringify<DirAssign>();

const stringifyDirect = (value: any) => typia.json.stringify<DirAssign>(value);

interface DirAssign {
  count: number;
  fid: string;
  url: string;

  publicUrl: string;
}

const testData = {
  count: 1,
  fid: "3,4625262",
  url: "http://seaweed-master:9333/3,4625262",
  publicUrl: "http://seaweed-master:9333/3,4625262/public",
};

group("easy", () => {
  summary(() => {
    bench("typia(createIsStringify)", () =>
      validationStringifyDirAssign(testData),
    );
    bench("typia(createStringify)", () => stringifyDirAssign(testData));
    bench("typia(direct)", () => stringifyDirect(testData));

    bench("bare", () => JSON.stringify(testData));
  });
});
