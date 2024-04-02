
try {

    const resultado = converte(123);

    console.log(resultado);

} catch (error) {
    if (error instanceof TypeError)
        console.log("TypeError: Tipo de dado incorreto!")
    else
        console.log("Erro: " + error)
} finally{
    console.log("Bye Bye!")
}

export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}