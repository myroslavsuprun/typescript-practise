type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, [1, 2]];
nums.push(1);
nums.push([[2], [32212]]);

// JSON
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: any };
type JSONArray = any[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {
    console.log(arg);
}

isJSON("")
