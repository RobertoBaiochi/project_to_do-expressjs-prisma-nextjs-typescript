import createApp from "./app";

const app = createApp();
const port = process.env.SERVER_PORT;

app.listen(port || 3333, () => {
    console.log(`🔥 Server running in http://localhost:${port}`);
});
