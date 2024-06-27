<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>

</head>
<body>
  <header> 
    <h1>Cadastro de clientes | Inova Network</h1>
  </header>
  
 <main class="text">

 <?php
$nome = $_GET["nome"];
$sobrenome = $_GET["sobrenome"];
$telefone = $_GET["telefone"];
$email = $_GET["email"];
$senha = $_GET["senha"];
$cpf = $_GET["cpf"];

echo "<p> É um prazer te conhecer, a Inova NetWork agradece $nome $sobrenome! Entraremos em contato com você!</p>"
?>

<button class="text-js">
    <a href="javascript:history.go(-1)"> Voltar a Página Anterior</a>
</button>


 </main>

</body>
</html>