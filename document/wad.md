# 📄 Documentação da Aplicação Web

#### Integrantes do grupo


- <a href="https://www.linkedin.com/in/maria-eduarda-barbosa-514a64215/">Maria Eduarda Barbosa Oliveira</a>
- <a href="https://www.linkedin.com/in/matheusferreiradasilva-/">Matheus Ferreira da Silva</a>
- <a href="https://www.linkedin.com/in/stefanne-soares-9b31a8256/">Stefanne Victória Andrade Soares</a>


## Sumário

[1. Introdução](#c1)

[2. Visão Geral da Aplicação Web](#c2)

[3. Projeto da Aplicação Web](#c3)

[4. Desenvolvimento da Aplicação Web](#c4)

[5. Conclusões e Trabalhos Futuros](#c5)

[6. Referências](#c6)

# <a name="c1"></a>1. Introdução

Este documento detalha o projeto de uma aplicação web de simulação de holdings, desenvolvida pelo Grupo PK com foco em otimizar a experiência do cliente da W1. A aplicação visa oferecer uma ferramenta intuitiva para que usuários possam explorar os benefícios da criação de holdings. O projeto se insere no contexto de inovação, buscando atender a um público que busca maior autonomia e clareza na gestão de seus patrimônios.

# <a name="c2"></a>2. Visão Geral da Aplicação Web

Esta seção apresenta a visão geral da aplicação web de simulação de holdings, detalhando seu escopo e o valor que ela trará para a W1.

Para isso, realizamos uma análise aprofundada da W1, compreendendo seu legado, objetivos estratégicos e posicionamento no mercado, além de seus diferenciais competitivos. Essa análise foi fundamental para alinhar o projeto às necessidades e expectativas da empresa, garantindo que a aplicação não apenas atenda aos requisitos técnicos, mas também contribua significativamente para o sucesso e inovação da W1.

A compreensão do cenário atual da W1 nos permitiu desenvolver uma solução que se integra harmoniosamente com seus processos existentes, ao mesmo tempo em que oferece um diferencial competitivo no segmento de simulação de holdings.

## 2.1 Forças de Porter

Análise das cinco forças competitivas de Michael Porter no contexto do projeto.

## 2.2 Análise SWOT

Esta subseção (2.2) apresenta a Análise SWOT da W1. A Análise SWOT é uma ferramenta de planejamento estratégico que auxilia na avaliação de fatores internos e externos que influenciam a organização, como forças (vantagens e diferenciais internos), fraquezas (pontos de melhoria ou limitações internas), oportunidades (fatores externos favoráveis ao crescimento) e ameaças (riscos e desafios externos).

Olhando para o contexto da W1, foram identificados os seguintes pontos:

<div align="center">
   <sub>Figura 1: Análise SWOT</sub><br>
   <img src="/assets/swot.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

**Forças (Strengths)**

- **Especialização em patrimônio familiar e planejamento sucessório**
    A W1 atua com foco claro em famílias empresárias, oferecendo soluções personalizadas que unem governança, planejamento patrimonial e jurídico, o que a diferencia de players mais genéricos.

- **Modelo multidisciplinar e integrativo**
    A abordagem da W1 une consultoria, educação, tecnologia e governança, formando uma atuação holística que vai além do financeiro e atinge aspectos humanos e educacionais da sucessão e legado.

- **Ênfase em relações de longo prazo**
    A W1 constrói vínculos duradouros com famílias, o que é um diferencial importante em um setor onde a confiança e a confidencialidade são essenciais.

**Fraquezas (Weaknesses)**

- **Baixo reconhecimento de marca no mercado amplo**
    Apesar da proposta sólida, a W1 ainda não tem uma marca amplamente reconhecida fora de nichos específicos de alto patrimônio.

- **Dependência de mão de obra altamente especializada**
    A atuação exige profissionais com habilidades técnicas e comportamentais específicas, o que pode limitar a escalabilidade e gerar custos altos de pessoal.

- **Oferta de serviços complexos para leigos**
    O cliente-alvo, mesmo com grande patrimônio, nem sempre compreende os benefícios de governança e sucessão estruturada, dificultando a comunicação e o convencimento do valor agregado.

**Oportunidades (Opportunities)**

- **Crescimento da demanda por planejamento sucessório no Brasil**
    Com o aumento da conscientização sobre a sucessão familiar e a alta concentração de empresas familiares no país, cresce a procura por serviços como os da W1.

- **Expansão da educação patrimonial e financeira**
    A W1 pode fortalecer sua vertical educacional (workshops, programas para herdeiros) como diferencial, atraindo novas gerações e estabelecendo vínculos com famílias de forma precoce.

- **Uso de tecnologia para escalabilidade**
    O desenvolvimento de plataformas digitais pode automatizar partes do processo de diagnóstico e acompanhamento, melhorando a eficiência e possibilitando crescimento.

**Ameaças (Threats)**

- **Concorrência com grandes bancos e multifamily offices**
    Instituições com recursos e marca consolidada podem oferecer serviços similares, muitas vezes com mais estrutura e alcance comercial.

- **Mudanças regulatórias e fiscais**
    Alterações na legislação tributária ou sucessória podem exigir reformulações nas estratégias dos clientes e impactar a atuação da empresa.

- **Instabilidade econômica**
    Crises econômicas podem adiar decisões sobre planejamento patrimonial, reduzindo a entrada de novos clientes.

## 2.3 Solução

Pensando na criação de holdings, é fundamental entender o que elas representam. Basicamente, uma holding é uma empresa cujo principal objetivo é "segurar" participações em outras empresas ou gerir patrimônios. No contexto do mercado financeiro, como o da W1, isso significa que uma holding detém ações de diversas outras companhias, além de bens e ativos (Meneses, 2024).

Especificamente, o tipo de holding que se alinha com a aplicação web ecom a W1 é a holding patrimonial. Ela é criada para administrar o patrimônio de uma pessoa física, com o grande atrativo de reduzir ou até anular a carga tributária sobre esses bens, dependendo do caso. Esse benefício fiscal ocorre porque, muitas vezes, não há declaração de Imposto de Renda sobre a holding em si, já que ela não gera receita a ser tributada; a cobrança de impostos se aplica apenas sobre os lucros gerados, por exemplo (Fularani, 2024). Essa característica torna a holding patrimonial uma ferramenta tão atraente para a gestão e otimização de bens.

A solução proposta pelo Grupo PK é a prototipagem de uma aplicação web de simulação de holdings, focada em transformar a experiência do cliente W1. Esta aplicação, que serve como um produto mínimo viável (MVP), oferece uma interface intuitiva e amigável para explorar os benefícios de uma holding.

Nossa aplicação web compreende as seguintes páginas principais: Login (para acesso seguro à plataforma), Inicial (visão geral e pontos de partida para a navegação), Meus Patrimônios (gerenciamento e visualização dos bens do usuário), Chat (comunicação e suporte, funcionalidade para futura implementação), Investimentos (seção dedicada a cenários de investimento), Holdings (detalhes e simulações de estruturas de holding) e Perfil (personalização e informações do usuário). Detalhes específicos sobre o fluxo, informações e funcionalidades de cada tela serão apresentados [aqui](#41-versão-final-da-aplicação-web).

É importante ressaltar que o foco inicial deste projeto é um front-end (interface do usuário) robusto. Embora não haja, nesta fase, integração com APIs de inteligência artificial de deep learning (aprendizado profundo, que envolve treinamento especializado com grandes volumes de dados para reconhecimento de padrões) (AWS, s.d), a arquitetura da aplicação já está preparada para uma futura expansão. A ideia é que, em uma próxima fase, a aplicação possa enviar os dados fornecidos pelo usuário a uma inteligência artificial que, com base em sua base de dados, identifique e sugira as melhores estruturas de holding para cada cenário, mas futuros passos serão descritos na [seção 5](#5-conclusões-e-trabalhos-futuros).

Toda a concepção do projeto foi pautada na experiência do usuário (UX) e na utilidade da aplicação. Buscamos um design conciso, coerente, leve, ágil, útil e prático, garantindo que a navegação seja fluida e que a curiosidade do usuário sobre a criação de uma holding seja plenamente sanada através da simulação e apresentação dos benefícios.


## 2.4 Canvas de Proposta de Valor

Esta subseção (2.4) apresenta o Canvas de Proposta de Valor, destacando os elementos essenciais que tornam o produto relevante para seu público-alvo.  A ferramenta permite mapear tarefas, dores e ganhos dos clientes, auxiliando no alinhamento da solução desenvolvida às necessidades reais do parceiro de projeto, garantindo maior aderência e criação de valor.

<div align="center">
   <sub>Figura 2: Canvas Proposta de Valor</sub><br>
   <img src="/assets/canvas.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

**Clientes**

- **Dores:**

  - Falta de entendimento sobre o que é uma holding e seus benefícios.
  - Processos burocráticos e papelada excessiva.
  - Interface de atendimento tradicional pouco acessível ou digitalizada.
  - Falta de autonomia para visualizar seus ativos e simular cenários.
  - Complexidade de termos jurídicos e fiscais.

- **Ganhos**

  - Simuladores fáceis de usar que mostram economia tributária e proteção patrimonial.
  - Acompanhamento visual e interativo do crescimento do patrimônio.
  - Redução de conflitos familiares via planejamento sucessório claro.
  - Interface acessível e adaptada ao público-alvo (ex.: fontes maiores, contrastes, explicações visuais).

- **Tarefas Clientes** 

  - Entender se vale a pena abrir uma holding.
  - Simular economia tributária de forma acessível.
  - Acompanhar o crescimento e evolução do patrimônio ao longo do tempo.
  - Compartilhar dados com seus consultores W1 com praticidade e segurança.

**Solução**

- **Analgésicos**

  - Fácil navegação e linguagem acessível.
  - Explicações visuais e relatórios automáticos que evitam necessidade de conhecimento técnico.
  - Plataforma única com todas as funcionalidades, evitando necessidade de múltiplos canais.

- **Ganhos**

  - Economia tributária demonstrada visualmente.
  - Comparativo do cenário “com” e “sem” W1.
  - Confiança e clareza para decisões patrimoniais importantes.

- **Produtos e Serviços**

  - Simulador de holding com cálculo de economia tributária.
  - Dashboard com gráficos de evolução patrimonial.
  - Onboarding gamificado para abertura de holding.
  - Metáforas visuais que explicam benefícios da W1.


# <a name="c3"></a>3. Projeto da Aplicação Web

## 3.1 Wireframes

Esta subseção (3.1) apresenta os wireframes das telas principais da aplicação, ilustrando a estrutura básica e o fluxo de navegação antes da aplicação de elementos visuais e de design.

<div align="center">
   <sub>Figura 3: Wireframes da aplicação</sub><br>
   <img src="/assets/wireframes-w1.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

Os wireframes desenvolvidos para o MVP da aplicação tiveram como objetivo estruturar visualmente as principais funcionalidades da plataforma, garantindo clareza na navegação e na hierarquia das informações. Esses protótipos de baixa fidelidade serviram como base para validar a experiência do usuário.

Foram criados wireframes para as seguintes telas:

- Login: tela inicial para acesso à plataforma, com campos de autenticação.

- Menu principal: painel de navegação com acesso às seções de Investimentos, Patrimônio, Holdings e Perfil.

- Investimentos: layout com cards ou gráficos representando os ativos simulados.

- Patrimônio: exibição do patrimônio consolidado da holding simulada.

- Holdings: tela com opções para criar e editar estruturas de holding, facilitando a visualização do planejamento sucessório.

- Perfil: espaço destinado às informações do usuário e configurações da conta.

Os wireframes foram desenvolvidos utilizando a ferramenta Figma, priorizando uma disposição intuitiva dos elementos para otimizar a usabilidade e reduzir a curva de aprendizado dos usuários. Você pode acessá-los com maior qualidade pelo [link](https://www.figma.com/design/GyiMEXQTwchJMQOMG1L2Ld/WIREFRAMES---HACKATON-W1?node-id=1-761&t=vxZKedk5NmvA8IYq-1).

## 3.2 Guia de Estilos

Nesta subseção (3.2) detalhamos o guia de estilos que define a paleta de cores, fontes, ícones e componentes de interface do usuário (UI) utilizados na aplicação, garantindo consistência visual e uma identidade de marca coesa.

<div align="center">
   <sub>Figura 4: Guia de Estilos da aplicação</sub><br>
   <img src="/assets/styleguide-w1.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

O guia de estilos da aplicação W1 estabelece uma identidade visual sólida e coerente, fundamentada em uma paleta de cores sóbria com tons de azul escuro, branco e preto, transmitindo profissionalismo e confiança. A tipografia escolhida, Inter, combina legibilidade e modernidade, sendo aplicada em diferentes pesos para hierarquizar informações com clareza. Os componentes de UI, como botões e campos de entrada, seguem um design minimalista e funcional, garantindo consistência na experiência do usuário. Ícones personalizados reforçam a identidade visual e facilitam a navegação. 

É possível acessar o guia com maior qualidade através do [link](https://www.figma.com/design/4hiCaAiI9t7x4Rvt3Fnzem/GUIA-DE-ESTILOS---HACKATON-W1?node-id=0-1&t=t3oG3TwXxnJ7Gc0p-1).


# <a name="c4"></a>4. Desenvolvimento da Aplicação Web

Nesta seção, detalhamos o processo de desenvolvimento da aplicação web, como a implementação das funcionalidades propostas. Buscamos garantir uma arquitetura escalável, código limpo e uma experiência de usuário intuitiva. 

## 4.1 Versão Final da Aplicação Web

Nessa subseção (4.1) apresenta-se uma visão geral da solução implementada e das principais funcionalidades.

**Tela de Login**

A tela de entrada do sistema (Figura 5) permite que o usuário acesse sua conta utilizando e-mail ou CPF e senha. A interface é simples e acessível, garantindo uma experiência fluida mesmo para públicos menos familiarizados com tecnologia.

<div align="center">
   <sub>Figura 5: Tela de Login</sub><br>
   <img src="/assets/site/login.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

**Dashboard Inicial (Tela de Menu)**

Após o login, o usuário visualiza um resumo geral de seus investimentos e patrimônio (Figura 6). A navegação é feita por botões claros e diretos, levando para as áreas de "Meus Investimentos" e "Meu Patrimônio".

<div align="center">
   <sub>Figura 6: Tela de Menu</sub><br>
   <img src="/assets/site/menu.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

Presente em todas as telas principais, o menu lateral é acessado pelas três barras no topo esquerdo e permite navegar rapidamente entre as seções: Holdings, Chat, Menu, Investimentos e Patrimônio.

Localizado no canto superior direito, o avatar do usuário abre opções para acessar o perfil e efetuar logout de forma segura.

**Tela "Meus Investimentos"**

Exibe uma lista dos investimentos cadastrados, juntamente com gráficos que mostram a distribuição e evolução. Também é possível adicionar novos investimentos.

<div align="center">
   <sub>Figura 7: Tela de Investimentos</sub><br>
   <img src="/assets/site/investimento.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

**Adicionar Novo Investimento**

Nesta tela, formulário com campos detalhados para cadastro de novos investimentos, incluindo nome, tipo, valor, data de aquisição e rentabilidade esperada, o que pode ser observado na figura abaixo.

<div align="center">
   <sub>Figura 8: Tela de Novo Investimento</sub><br>
   <img src="/assets/site/novoInvestimento.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

**Tela "Meu Patrimônio"**

Lista visual dos bens do usuário, como imóveis, veículos e empresas. Interface focada em clareza e organização.

<div align="center">
   <sub>Figura 9: Tela de Patrimônios</sub><br>
   <img src="/assets/site/patrimonio.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

**Adicionar Novo Patrimônio**

Nesta tela, formulário intuitivo para registrar novos bens patrimoniais, com campos como tipo, valor, data e localização, o que pode ser observado na figura abaixo.

<div align="center">
   <sub>Figura 10: Tela de Novo Patrimônio</sub><br>
   <img src="/assets/site/novoPatrimonio.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

**Tela de Holdings**

A tela de Holdings (Figura 11) oferece uma visão consolidada das holdings criadas pelo usuário, organizando os ativos que compõem cada estrutura patrimonial. Essa tela é um ponto central para visualizar como o patrimônio está distribuído entre diferentes holdings e seus respectivos ativos.

<div align="center">
   <sub>Figura 11: Tela de Holdings</sub><br>
   <img src="/assets/site/holdings.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

Na parte inferior da interface, há uma barra de navegação fixa com três ações principais:

- Visualizar Holding: permite abrir os detalhes de uma holding específica, acessando seus ativos, histórico e valor total.

<div align="center">
   <sub>Figura 12: Tela de Visualizar Holdings</sub><br>
   <img src="/assets/site/visualizarHoldings.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

- Adicionar Ativo: redireciona para a tela de cadastro de novos ativos dentro da holding.

<div align="center">
   <sub>Figura 13: Tela de Novo Ativo</sub><br>
   <img src="/assets/site/novoAtivo.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

- Ir para Ativos: leva o usuário para a tela geral de ativos, onde pode visualizar todos os investimentos fora do contexto da holding.

<div align="center">
   <sub>Figura 14: Tela de Ativos</sub><br>
   <img src="/assets/site/ativo.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

Essa barra torna a navegação mais rápida e intuitiva, especialmente para usuários que desejam manipular ou analisar seus ativos em diferentes contextos.

**Adicionar Nova Holding**

Nesta tela, formulário intuitivo para registrar novas holdings, com campos como nome, integrantes, descrição, bens a incluir e upload de documentos, o que pode ser observado na figura abaixo.

<div align="center">
   <sub>Figura 15: Tela de Ativos</sub><br>
   <img src="/assets/site/criarHolding.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

**Tela de Chat**

 A funcionalidade de chat foi concebida como uma IA interativa capaz de simular a criação de holdings, demonstrar seus benefícios tributários e sucessórios, e gerar relatórios personalizados com base nas informações fornecidas pelo usuário.

Essa IA atuaria como um assistente consultivo, guiando o cliente por meio de perguntas simples para montar uma estrutura patrimonial ideal, sugerindo estratégias e apresentando comparativos com e sem holding.

Entretanto, essa funcionalidade ainda não foi implementada nesta versão da aplicação. A interface do chat foi incluída como um placeholder visual, indicando o potencial da ferramenta para futuras iterações.

<div align="center">
   <sub>Figura 16: Tela de Chat</sub><br>
   <img src="/assets/site/chat.png" width="100%" 
   alt="Título"><br>
   <sup>Fonte: Autoral, 2025</sup>
 </div>

# <a name="c5"></a>5. Conclusões e Trabalhos Futuros

Ao apresentar a aplicação web de simulação de holdings, é evidente que, embora seja um ponto de partida sólido, existem oportunidades de aprimoramento e consolidação futura. Nosso objetivo é que ela se torne uma ferramenta otimizada, totalmente funcional, segura e rápida.

Com isso em mente, como próximos passos, pensamos na implementação de Inteligência Artificial Generativa baseada em deep learning. Isso envolveria o treinamento de uma IA com um extenso banco de dados, contendo informações quase completas para a simulação de holdings. Essa base de dados incluiria respaldo legislativo, exemplos de holdings, detalhes sobre criação e simulações patrimoniais, entre outros dados cruciais para aprimorar a rede neural da aplicação e oferecer sugestões ainda mais precisas.

Além disso, a segurança dos dados é primordial. Para isso, consideramos a utilização de blockchain para o armazenamento seguro de informações, especialmente dados criptografados. Isso proporcionaria aos usuários maior tranquilidade ao saber que seus dados sensíveis estão protegidos, mesmo ao realizar uploads.

Migrando para a interface do usuário, almejamos o desenvolvimento de um versionamento mobile e a criação de um aplicativo dedicado. O objetivo é ir além da aplicação web, oferecendo maior praticidade e facilidade de acesso, o que, por sua vez, contribuirá significativamente para uma experiência do usuário ainda mais fluida e completa.



# <a name="c6"></a>6. Referências


FURLANI, Bruna. Holding Patrimonial: Guia Completo sobre Como Funciona. InfoMoney, 2024. Disponível em: &lt;https://www.infomoney.com.br/guias/holding-patrimonial/#:~:text=Assim%20como%20o%20testamento%20e,a%20serem%20partilhados%20na%20heran%C3%A7a.>. Acesso em: 22 de maio de 2025.

MENESES, Amanda. Guia Completo sobre Holding. InvestNews, 2024. Disponível em: https://investnews.com.br/guias/holding/. Acesso em: 22 de maio de 2025.

AMAZON WEB SERVICES, INC. O que é o aprendizado profundo em IA? Amazon Web Services (AWS), s.d. Disponível em: <https://aws.amazon.com/pt/what-is/deep-learning/#:~:text=e%20aprendizado%20profundo?-,O%20que%20%C3%A9%20o%20aprendizado%20profundo%20em%20IA?,arquivo%20de%20som%20em%20texto.>. Acesso em: 23 de maio de 2025.