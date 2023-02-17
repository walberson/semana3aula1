/* console.log("executando uma promessa");
const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a + b == 4) {
        resolve(a + b);
      } else {
        reject("a soma deu errado");
      }
    }, 2000);
  });
};

somaDoisNumeros(5, 1)
  .then(
    (soma) => {
      if (soma < 5) {
        console.log("é menor");
      }
    },
    () => {
      console.log("deu errado");
    }
  )
  .then((soma) => {
    if (soma != 5) {
      console.log("é menor");
    }
  })
  .then((soma) => {
    if (soma > 0) {
      console.log("é menor");
    }
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("terminou");
  }); */
/*   let variable = document.getElementById("root")


async function login(user, password) {
    variable.innerText = 'carregando...'
  try {   
    const verificaUser = await new Promise((resolve) =>
      setTimeout(() => {
        if (user == "andressa") {
          resolve("Bem vinda andressa");
        } else {
          throw new Error("usuário inválido");
        }
      }, 3000)
    );
    //imprime promessa
    console.log(verificaUser)
      //promessa
    const verificaPassword = await new Promise((resolve) =>
    setTimeout(() => {
      if (password == "1234") {
        resolve("Senha correta");
      } else {
        throw new Error("Senha incorreta");
      }
    }, 3000)
  );
  //imprime promessa
    console.log(verificaPassword)
    
  } catch (e) {
    console.log(e)
  } finally {
    console.log('login terminou')
    variable.innerText = `bem-vinda ${user}`
  }
}
login('andressa','1234') */


/* let variable = document.getElementById("root");
async function buscaDados() {
  console.log("carregando...");
  try {
    variable.innerText = "carregando...";
    const response = await fetch("https://api.github.com/users/walberson");
    const dados = await new Promise((resolve) =>
      setTimeout(() => {
        if (true) {
          resolve(response.json());
        } else {
          throw new Error("usuário inválido");
        }
      }, 3000)
    );
    console.log(dados);
    variable.innerText = dados?.login;
  } catch (e) {
  } finally {
  }
}

buscaDados(); */


let variable = document.getElementById("root");
async function buscaDados() {
  console.log("carregando...");
  try {
    variable.innerText = "estamos configurando sua conta...";
    const response = await fetch("https://api.github.com/users/walberson");
    const dados = await response.json()
    console.log(dados);
    variable.innerText = dados?.login;
  } catch (e) {
  } finally {
  }
}

buscaDados();