1. **Usar um Servidor Local:** A maneira mais comum de contornar esse problema é servir seus arquivos através de um servidor HTTP local. Você pode fazer isso de várias maneiras:
   
   - **Node.js com Express:** Se você já tem o Node.js instalado, pode facilmente configurar um servidor local usando o Express.
   - **Servidor HTTP Simples:** Para um projeto simples, você pode usar um servidor HTTP básico. Se você tem Python instalado, por exemplo, pode iniciar um servidor com `python -m http.server` (Python 3) ou `python -m SimpleHTTPServer` (Python 2) no diretório do seu projeto.
   - **Extensões de Navegador:** Alguns navegadores oferecem extensões que permitem iniciar um servidor local rapidamente.

2. **Configurar os Headers de CORS:** Se você estiver usando um servidor local que permite a configuração de headers, você pode configurar os headers de CORS para permitir o carregamento de módulos.

3. **Desenvolver com Live Server em um IDE:** Se você estiver usando um ambiente de desenvolvimento integrado (IDE) como o Visual Studio Code, pode usar extensões como o Live Server, que cria um servidor local para você e recarrega a página automaticamente sempre que um arquivo é alterado.

4. **Desabilitar a Segurança do CORS no Navegador:** Esta é geralmente a opção menos recomendada, pois desabilitar as medidas de segurança do navegador pode expor você a riscos de segurança. No entanto, para fins de desenvolvimento local e teste, você pode iniciar o navegador com a segurança do CORS desabilitada. Por exemplo, no Chrome, você pode fazer isso usando a linha de comando com um flag especial, mas lembre-se de não usar esse modo para navegar na internet.

A primeira opção (usar um servidor local) é geralmente a mais recomendada para desenvolvimento local, pois simula mais de perto o ambiente de produção e evita problemas de segurança.