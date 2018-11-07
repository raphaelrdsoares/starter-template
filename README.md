# Starter Template

Starter Template provê um template com estrutura inicial para um projeto básico front-end utilizando npm.

## Incluso

As dependências que estão inclusas no package.json são

| Dependência                                  | Versão |
| -------------------------------------------- | ------ |
| [Bootstrap][bootstrap]                       | v4.1.3 |
| [JQuery][jquery]                             | v3.3.1 |
| [Font Awesome][fontawesome]                  | v5.5.0 |
| [Material Icons][materialicons]              |
| [Google Fonts: Raleway][googlefonts_raleway] |
| [Reset CSS][resetcss]                        | v4.0.1 |
| [Gulp][gulp]                                 | v3.9.1 |

## Requisitos

## Executando

Primeiramente é necessário instalar o gulp globalmente na máquina, rodando o comando abaixo

```
$ sudo npm instal gulp -g
```

Após instalado, executar o comando `gulp start` para ativar o live reload.

```
$ gulp start
```

Após essa execução, todas as alterações efetuadas nos arquivos html, css ou js serão refletidas diretamente no browser sem necessidade de recarregar a página toda hora.

## Gerando um versão

```
$ gulp build
```

## License

MIT

**Free Software, Hell Yeah!**

[bootstrap]: https://getbootstrap.com/
[jquery]: https://jquery.com/
[fontawesome]: https://fontawesome.com/
[materialicons]: https://material.io/tools/icons/?style=baseline
[googlefonts_raleway]: https://fonts.google.com/specimen/Raleway?selection.family=Raleway
[resetcss]: http://meyerweb.com/eric/tools/css/reset/
[gulp]: https://gulpjs.com/
