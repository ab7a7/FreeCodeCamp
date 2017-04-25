function bouncer(arr) {
    for (var a in arr) {
        if (Boolean(arr[a])) {
            console.log(arr[a]);
        }
    }
    return arr;
}

bouncer([7, "ate", "", false, 9]);

bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([1, null, NaN, 2, undefined]);