document.addEventListener("DOMContentLoaded", function() {
    const studentsList = document.getElementById("studentsList");
    const students = [
        "ABLAO MAY ROSE ROSAL",
        "ABON KING ROMAN",
        "ACOBA, RALPH LAUREN",
        "AGAG AYEN RACHEL",
        "AGUDON CLARISSA MAE",
        "ALBANO, SEAN CARLO DELOS REYES",
        "ALDUZ NOVALYN",
        "ALINGOD, KRISTALA GALINGANA",
        "ALMEROL, MARIE",
        "ANGELO, GUILLER INES",
        "ANGUE, ANGELINA",
        "ANQUINALLO, ARHON AQUINO",
        "ANTONIO JOHN CARLO",
        "ANTONIO, FLORENCE",
        "APALES MARK EKVIN S.",
        "ATTABAN ROXAN A",
        "BACCAY, CHRISTIAN",
        "BANDONIL, KRISA MAY PALES",
        "BASSIG REYMARK",
        "BASSIG RYAN JOE",
        "BATNAG, EDMAR TERRENAL",
        "BATOON,LEIANE MAE GAOAT",
        "BAUTISTA, JESA MAE",
        "BELLO KING JAMES PHILIP AGODON",
        "BERBON, APRILYN MAE",
        "BERMUDEZ, ROAN INERE",
        "BILOG JOGN CARL L.",
        "BITAMOG, LORRAINE PIMENTEL",
        "BRISTOL LEODELYN",
        "BUENO ARJAY",
        "CABANTE DERIC JOREL",
        "CABBUANAN HEART",
        "CABUGAO,JUNIA PABLO",
        "CACCAM TOBIERIC JEAN R.",
        "CALAPIAO, NOVALYN T.",
        "CAMUS, JOHNWIN LLOYD ASUNCION",
        "CAÑEDO MELANIE G.",
        "CASASOLA REY TOMINES",
        "CASTRO ISAAC PARAVO",
        "CAYABYAB, ALVIN DAYOS",
        "CERA, RHODESSA",
        "CHRISTINE CALACSAN",
        "CHU, QUEENZY MAE JOY",
        "CONCEPTION, MIKYLE ROSE BAILON",
        "CORPUZ TOMAS JACOB ASIS",
        "CORPUZ, CRYSTALEN JADE DELA CRUZ",
        "CORPUZ, JAMES MATHEW",
        "CORPUZ, ROCHELLE ROSIMO",
        "CORPUZ, SUZANE DE GUZMAN",
        "CUMIGAD MAY ANN",
        "DAGDAG ANTHONY JAMES GAMENG",
        "DE BIEN HYACINTH",
        "DELA CRUZ MYLENE DOMINGO",
        "DELA CRUZ, EMMAN A.",
        "DELA CRUZ, HARREL DAVE",
        "DELA CRUZ, JONALYN ANCHETA",
        "DELA CRUZ, TAMEYA",
        "DELFIN APRILYN P.",
        "DIAZ ANDREI PAOLO NOVIDO",
        "DINGLE JUSHUA A.",
        "DIZON, FRANCIS LANCE J",
        "DOMINIC, NORIEL",
        "DUCUSIN ROGIE CHRISTIAN",
        "DULAY SHIREEN JOY S.",
        "ELARDE, JHON WEYN",
        "ERFELUA APRILYN",
        "ESPERO, PRINCESS ERICKA JEAN DOMINGO",
        "ESQUIVEL KERVIE A.",
        "ESTEBAN, FELIX JOSE",
        "ESTELA, FERNAN",
        "EUGENIO KRISTINE JOY",
        "FAUSTINO, JERICHO",
        "FELIPE ANJIE A.",
        "FLORA JERIC C.",
        "FLORES, ALTHEA",
        "FRANADA CHARIESSE MAY IGNASIO",
        "GABRIEL JOHN MARK",
        "GADAYOS CECILLE JOY FAJARDO",
        "GALAMGAM DONNA CRIELA",
        "GALASI, JONALYN IGLESIA",
        "GALLASINAO GENELYN",
        "GAMIT MARIE CACUYONG",
        "GANIR, ALDRIN PAUL G.",
        "GANNABAN JOHN PAUL M.",
        "GUADIZ, KAYSERI P.",
        "GUITTU NATALIE V.",
        "GUMARO, HEART MAE",
        "GUZMAN CHRISTIAN JAY",
        "INDAYON, MARK JR. LEANO",
        "JALLORINA, JESSA PASION",
        "JOSON, ANNIKA LEIRA",
        "JUAN APRIL JOY",
        "LA MADRID JOSHUA MACAFE",
        "LABRADOR, MARIEL IVY",
        "LACTAO, RHEA MAE",
        "LAMORENA JOHNSON M.",
        "LIBAO NEO BREÑELLE",
        "LICUANAN JEFFERSON",
        "LINDA EDMAR M.",
        "LLACUNA ANALIZA CASTILLEJO",
        "LOPEZ, MARUILYN ALARCIO",
        "LUMANOG ALDRIN SANTOS",
        "LUTRANIA BERNADETTE E.",
        "MABUTI, V-JAY TUGADE",
        "MACARAMBON FAHAD",
        "MACONDARA SAJID",
        "MADAMBA, EIMAN TOMAS",
        "MADAYAG, JAMES CABIGTING",
        "MADMABA, GRACIELLE",
        "MAGDAY, DAN LORENZ",
        "MALIAO, GLENDA",
        "MALUYO, CHRISTOPHER",
        "MANAGUELOD, JOHN MAR",
        "MANALILI BEA",
        "MANANGAN SARAH JANE SANTIAGO",
        "MANANGAN VEA FLORES",
        "MANGABAT RONETH B.",
        "MANUEL, CHRISTINE MAERLDY",
        "MANUEL, JUSTINE CARL TADEO",
        "MARCIANO, ROSIE GRACE PABRO",
        "MARTIN, ADRIAN LUKE AK MELCHOR",
        "MIGUEL JOHN ASHLEY",
        "MINA, JENNY ANN BATTUG",
        "MONTILLA, SHIELA MAE F.",
        "NATIVIDAD PRECIOUS YRA",
        "NATIVIDAD SAIRA MAE JOY R.",
        "NATIVIDAD, CRISTINE APELIDO",
        "NEFALAR, CORINA TOLENTINO",
        "NIKKA JANE B. GUITTU",
        "NOBLEZA, LYNDON",
        "OBILLO MICHAELA R",
        "OLAMA HYLON M.",
        "OLOG, CHERRISH NEA VALDEZ",
        "PABRO, JOYCE ANNE DAVID",
        "PAJARILLO, ABEL GUILLERMO",
        "PARADO, CHELSEA JOY KATIPUNAN",
        "PIMENTEL, APRIL ANN L.",
        "PIÑALBER JHAMILLE TAGACA",
        "PULIDO ANDREA FAYE",
        "QUEDDENG MARK YHACINTH",
        "RABAGO, ROSELLE ARGUEL",
        "RABOR, JOHN MYKO RECCION",
        "RACRAQUIN, JHESTER BALAGAN",
        "RAFANAN, OLIVER T.",
        "RAMOS ALAIZA BALISI",
        "RAMOS ANNIE C.",
        "RAMOS MARJORIE S.",
        "RAMOS, JOHN MARK CANEDO",
        "REDITO, LERICH MAE",
        "RIGOS, JENNY MAE",
        "RODRIGUEZ REA MAE",
        "RONAS JERICKSON",
        "RONAS JERICKSON C.",
        "RUBIO RHYMEL LUIS",
        "SALMO EREEJ FAYE RAMITERRE",
        "SALVADOR, KAMILLE R.",
        "SAMANTHA MAE MANGASER",
        "SENTENTA, PRINCES ANN TEJEDO",
        "SERRANO, JUSTINE KATE, DANDOY",
        "SILVA MARY GRACE",
        "SUPREMINDO MAILA-JANE",
        "TABUNAN, MICHAELA PAVO",
        "TADENA LOU ANGELIC M.",
        "TAGALISMA ROCKY DEL ROSARIO",
        "TOLENTINO, CHRISTINE M.",
        "TORRE, LOVELYN GRACE",
        "VALDEZ HONEYLY OBINA",
        "VELASCO JANIBAL",
        "VIDAL, ALTHEA MAE",
        "VIDAL, DOMINIQUE",
        "VILLANUEVA KYLE VINCENT OCTAVIO",
        "VILLANUEVA, PRINCES JHENY FELIPE",
        "YABUT, SARAH",
    ];

    students.forEach(student => {
        const li = document.createElement("li");
        li.textContent = student;
        studentsList.appendChild(li);
    });

    
});
