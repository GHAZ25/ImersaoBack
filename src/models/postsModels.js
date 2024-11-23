import conectarAoBanco from "../config/dbconfig";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("imersao-dev");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}