import typia from "typia";

import { bench, group, summary } from "mitata";

const stringifyDirAssign = typia.json.createStringify<NestedDirAssign>();

const validationStringifyDirAssign =
  typia.json.createIsStringify<NestedDirAssign>();

const stringifyDirect = (value: any) =>
  typia.json.stringify<NestedDirAssign>(value);

interface DirAssign {
  count: number; // Must be an integer > 0.
  fid: string; // Must match a pattern of a comma-separated pair of integers.
  url: string; // Must be a valid URL containing the fid as part of its path.
  publicUrl: string; // Must be a valid URL derived from the url by appending "/public".
}

interface NestedDirAssign {
  assign: DirAssign; // The DirAssign interface applies here.
  extra: {
    [key: string]: NestedDirAssign | DirAssign; // Arbitrary depth of nesting.
  };
}

const testData: NestedDirAssign = {
  assign: {
    count: 1,
    fid: "3,4625262",
    url: "http://seaweed-master:9333/3,4625262",
    publicUrl: "http://seaweed-master:9333/3,4625262/public",
  },
  extra: {
    level1: {
      assign: {
        count: 2,
        fid: "5,100",
        url: "http://seaweed-master:9333/5,100",
        publicUrl: "http://seaweed-master:9333/5,100/public",
      },
      extra: {
        level2: {
          assign: {
            count: 3,
            fid: "10,200",
            url: "http://seaweed-master:9333/10,200",
            publicUrl: "http://seaweed-master:9333/10,200/public",
          },
          extra: {
            level3: {
              assign: {
                count: 5,
                fid: "15,300",
                url: "http://seaweed-master:9333/15,300",
                publicUrl: "http://seaweed-master:9333/15,300/public",
              },
              extra: {},
            },
          },
        },
      },
    },
  },
};

group("hard", () => {
  summary(() => {
    bench("typia(createIsStringify)", () =>
      validationStringifyDirAssign(testData),
    );
    bench("typia(createStringify)", () => stringifyDirAssign(testData));
    bench("typia(direct)", () => stringifyDirect(testData));

    bench("bare", () => JSON.stringify(testData));
  });
});
