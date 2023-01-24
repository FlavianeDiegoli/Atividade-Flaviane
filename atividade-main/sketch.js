//criar variáveis

var gato 
var gatoImg

//função que carrega imagens
{
   //carregar imagens
  
 function preload()

 
 gatoImg = loadImage("img/gato.jpg");
} 
    

  


//função que inicializa o arquivo
{
    //cria tamanho do fundo da tela
    function setup()
    createCanvas(600,200)
    //criar sprites
    gato = createSprite(100,100,20,20);
    gato,addAnimation("gato",gatoImg);
    //carregar imagem
     gatoImg = loadAnimation("img/gato.jpg")
    //colocar tamanho
     gato.scale= 0.5
     gato.x=50;


}     




//função que executa o programa até que seja parado
{
    //colocar cor de fundo
    background("#F2F4");
    //condição para pular
    if(keyDown("space"))
    {
        gatoImg.velocityY = -10
        gato.velocityY = gato.velocityY + 0.8;
        gato.collide(chaoInvisivel);
    }
    //exibir texto de instrução

    //comando que desenha sprites
 
}


