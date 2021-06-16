/*eslint-disable @typescript-eslint/no-unused-vars*/
// typescriptの基本の型
//boolean
let boo1: boolean = true;

//nuumber 数値
let num: number = 0;

//string 文字
let str: string = "A";

//array 配列
//numberの配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple あまり使わない
let tuple: [number, string] = [0, "A"];

//any なるべく使わない
let any1: any = false;

//void retunがない
const funcA = (): void => {
  const test = "TEST";
};

//null型
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 88, name: aaaaa };
