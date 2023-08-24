async function getHello() {
    await new Promise((delay) => setTimeout(delay, 1000));

    return "Async Hello";
}

async function main() {
    try {
        const result = await getHello();
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

main();
