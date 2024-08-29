const adjectives = [
    'linda', 'querida', 'encantadora', 'maravilhosa', 'admirável', 'preciosa', 'fascinante', 'adorável', 'sensacional', 'divina',
    'belíssima', 'radiante', 'deslumbrante', 'carinhosa', 'cativante', 'irresistível', 'incrível', 'impecável', 'encantadora', 'charmosa',
    'tua', 'meiga', 'delicada', 'brilhante', 'luminosa', 'sonhadora', 'aprazível', 'esplêndida', 'marcante', 'querida',
    'graciosa', 'preciosa', 'formosa', 'estonteante', 'divina', 'magnífica', 'singular', 'incomparável', 'singela', 'excepcional',
    'radiantemente bela', 'doce', 'afetuosa', 'cúmplice', 'feliz', 'vibrante', 'fascinante', 'honesta', 'sublime', 'resplandecente',
    'coração', 'maravilhosa', 'elegante', 'encantadora', 'repleta de charme', 'brilhante', 'incomparável', 'extraordinária', 'tua',
    'um sonho', 'flor', 'linda', 'a mais bela', 'iluminada', 'carinhosa', 'única', 'admirada', 'querida', 'especial'
];

const verses = [
    'Filipenses 4:6 - "Não andeis ansiosos de coisa alguma, antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com ação de graças."',
    'Mateus 6:34 - "Não andeis, pois, ansiosos pelo dia de amanhã, porque o dia de amanhã cuidará de si mesmo. Basta a cada dia o seu mal."',
    '1 Pedro 5:7 - "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós."',
    'Salmos 55:22 - "Lança o teu cuidado sobre o Senhor, e ele te susterá; jamais permitirá que o justo seja abalado."',
    'Isaías 41:10 - "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortalecerei, e te ajudarei, e te susterei com a destra da minha justiça."',
    'Salmos 34:4 - "Busquei ao Senhor, e ele me respondeu; livrou-me de todos os meus temores."',
    'Jeremias 29:11 - "Porque eu bem sei os pensamentos que penso de vós, diz o Senhor, pensamentos de paz e não de mal, para vos dar o fim que esperais."',
    'Salmos 37:5 - "Entrega o teu caminho ao Senhor, confia nele, e ele o fará."',
    'Hebreus 13:6 - "De maneira que podemos dizer com confiança: O Senhor é o meu ajudador, e não temerei; que me poderá fazer o homem?"',
    'Isaías 26:3 - "Tu, Senhor, conservarás em perfeita paz aquele cuja mente está firme em ti; porque confia em ti."',
    'Salmos 42:11 - "Por que te abates, ó minha alma, e por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei; ele é a salvação da minha vida."',
    'Romanos 8:28 - "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto."',
    'João 14:27 - "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como a dá o mundo. Não se turbe o vosso coração, nem se atemorize."',
    '2 Coríntios 1:10 - "Da grande morte nos livrou e livrará; em quem temos esperado, que ainda nos livrará de tão grande morte."',
    'Salmos 119:165 - "Grande paz têm os que amam a tua lei, e para eles não há tropeço."',
    'Romanos 15:13 - "Ora, o Deus de esperança vos encha de toda a alegria e paz na vossa fé, para que abundéis em esperança pela potência do Espírito Santo."',
    'Salmos 23:1-4 - "O Senhor é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas. Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome. Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam."',
    'Tiago 1:5 - "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e nada lhes impropera, e ser-lhe-á dada."',
    'Salmos 46:10 - "Aquietai-vos, e sabei que eu sou Deus; serei exaltado entre as nações, serei exaltado na terra."',
    'Salmos 56:3 - "Em qualquer tempo que eu temer, confiarei em ti."',
    'Filipenses 4:13 - "Tudo posso naquele que me fortalece."',
    'Isaías 43:2 - "Quando passares pelas águas, estarei contigo; e quando pelos rios, eles não te submergirão; quando andares pelo fogo, não te queimarás, nem a chama arderá em ti."',
    '2 Timóteo 1:7 - "Porque Deus não nos deu o espírito de temor, mas de poder, de amor e de moderação."',
    'Mateus 11:28 - "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei."',
    'Salmos 62:1 - "Somente em Deus é que a minha alma espera silenciosa; dele vem a minha salvação."',
    'Hebreus 11:1 - "Ora, a fé é a certeza de coisas que se esperam, a convicção de fatos que se não veem."',
    'Salmos 121:1-2 - "Levantarei os meus olhos para os montes: de onde vem o meu socorro? O meu socorro vem do Senhor, que fez o céu e a terra."',
    'Romanos 8:31 - "Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?"',
    'Salmos 30:5 - "Porque a sua ira dura só um momento; no seu favor está a vida. O choro pode durar uma noite, mas a alegria vem pela manhã."',
    'Isaías 40:31 - "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como as águias; correrão, e não se cansarão; caminharão, e não se fatigará."',
    'Tiago 5:13 - "Está alguém entre vós aflito? Ore. Está alguém contente? Cante louvores."',
    'Salmos 9:10 - "Em ti confiam os que conhecem o teu nome; pois tu, Senhor, nunca desamparaste os que te buscam."',
    'Salmos 18:2 - "O Senhor é a minha rocha, a minha fortaleza e o meu libertador; o meu Deus, o meu rochedo, em quem confio; o meu escudo e a força da minha salvação, o meu alto refúgio."',
    'Salmos 31:24 - "Esforçai-vos e animai-vos, todos vós que esperais no Senhor."',
    'João 16:33 - "Estas coisas vos tenho dito para que tenhais paz em mim. No mundo tereis aflições, mas tende bom ânimo; eu venci o mundo."',
    'Romanos 12:12 - "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração."',
    'Filipenses 4:19 - "O meu Deus, segundo a sua riqueza, suprirá todas as vossas necessidades em glória, por Cristo Jesus."',
    'Salmos 56:9 - "Então os meus inimigos voltarão para trás no dia em que eu clamar; sei isto, que Deus é por mim."',
    'Salmos 34:7 - "O anjo do Senhor acampa-se ao redor dos que o temem, e os livra."',
    'Salmos 145:18 - "Perto está o Senhor de todos os que o invocam, de todos os que o invocam em verdade."',
    'Mateus 7:7 - "Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á."',
    'Salmos 118:6 - "O Senhor está comigo; não temerei; que me poderá fazer o homem?"',
    'Salmos 139:23-24 - "Sonda-me, ó Deus, e conhece o meu coração; prova-me e conhece os meus pensamentos. Vê se há em mim algum caminho mau e guia-me pelo caminho eterno."',
    '2 Coríntios 12:9 - "Mas ele me disse: A minha graça te basta, porque o poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo."',
    'Salmos 71:5 - "Pois tu és a minha esperança, Senhor Deus; tu és a minha confiança desde a minha mocidade."',
    'Isaías 43:1 - "Mas agora assim diz o Senhor que te criou, ó Jacó, e que te formou, ó Israel: Não temas, porque eu te remi; chamei-te pelo teu nome; tu és meu."',
    'Salmos 27:1 - "O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?"',
    'Salmos 119:114 - "Tu és o meu esconderijo e o meu escudo; eu espero na tua palavra."',
    'Mateus 10:29-31 - "Não se vendem dois passarinhos por um asse? E nenhum deles cairá em terra sem a vontade de vosso Pai. E até mesmo os cabelos da vossa cabeça estão todos contados. Não temais, pois, mais valeis vós do que muitos passarinhos."',
    'Salmos 3:5 - "Eu me deito e durmo em paz; acordo, porque o Senhor me sustém."',
    'Salmos 18:30 - "Quanto a Deus, a sua maneira é perfeita; a palavra do Senhor é provada; ele é escudo para todos os que nele confiam."',
    'Romanos 8:37 - "Mas em todas essas coisas somos mais do que vencedores, por aquele que nos amou."',
    'João 14:1 - "Não se turbe o vosso coração; credes em Deus, crede também em mim."',
    'Salmos 34:10 - "Os leõezinhos necessitam e passam fome, mas aqueles que buscam ao Senhor bem nenhum lhes faltará."',
    'Salmos 56:13 - "Pois tu me livraste da morte, sim, dos meus pés, para que não vacilem; para que ande diante de Deus na luz dos vivos."',
    'Salmos 73:26 - "A minha carne e o meu coração desmaiam; mas Deus é a fortaleza do meu coração e a minha parte para sempre."',
    'Isaías 50:7 - "Porque o Senhor Deus me ajudará; por isso não fui confundido; por isso fiz o meu rosto como um flint, e sei que não serei confundido."',
    'Salmos 112:7 - "Não temerá maus rumores; o seu coração está firme, confiando no Senhor."',
    'Salmos 18:32 - "O Deus que me cinge de força e aperfeiçoa o meu caminho."',
    'Mateus 21:22 - "E tudo quanto pedirdes em oração, crendo, o recebereis."',
    'Salmos 19:14 - "As palavras dos meus lábios e o meditar do meu coração sejam agradáveis na tua presença, Senhor, rocha minha e redentor meu."',
    'Salmos 145:14 - "O Senhor sustém a todos os que caem e levanta a todos os abatidos."',
    'Salmos 20:4 - "Conceda-te segundo o teu coração e cumpra todo o teu plano."',
    'Filipenses 4:4 - "Alegrai-vos sempre no Senhor; outra vez digo, alegrai-vos."',
    'Romanos 12:12 - "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração."',
    'Salmos 121:7-8 - "O Senhor te guardará de todo o mal; guardará a tua alma. O Senhor guardará a tua entrada e a tua saída, desde agora e para sempre."'
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function displayMessage() {
    const greetingElement = document.getElementById('greeting');
    const verseElement = document.getElementById('verse');

    const adjective = getRandomElement(adjectives);
    const verse = getRandomElement(verses);
    const names = ['australopiteca', 'hemorroidinha', 'amor', 'princesa', 'gatinha', 'jeanette', 'edna', 'nene', 'veinha da lancha'];
    const name = getRandomElement(names);


    greetingElement.textContent = `Oi ${name}, você é ${adjective}.`;
    verseElement.textContent = `Versículo: ${verse}`;
}

window.onload = displayMessage;
