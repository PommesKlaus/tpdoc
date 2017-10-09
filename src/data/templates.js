export const template = {
  version: '1.0',
  lastUpdate: '2017-09-25T14:31:22.143Z',
  title: 'Standardfragebogen',
  description: `
  Der folgende Fragebogen ist für alle Geschäftsbeziehungen zu befüllen, für die kein besonderer Fragebogen zur Verfügung gestellt wurde.  
  Bei der Beantwortung der Fragen ist darauf zu achten, dass die Antworten
  - korrekt sind, 
  - vollständig sind und
  - in einer zur Weitergabe an Dritte bestimmten Form erfolgen. 
  
  Deshalb ist auf die Verwendung AXA-interner **Abkürzungen zu verzichten** und die Beantwortung hat **ausführlich sowie in ganzen Sätzen** zu erfolgen. Der Bearbeiter sollte im Hinterkopf haben, dass der finalisierte Fragebogen ohne weitere Bearbeitung an die Finanzverwaltung weitergegeben wird.`,
  parts: [
    {
      title: 'A. Sachverhalt/Funktions- und Risikoanalyse',
      description: 'Anforderung gem. § 4 Abs. 1 Nr. 2 und Nr. 3 GAufzV: Aufzeichnungen über Geschäftsbeziehungen des Steuerpflichtigen, Darstellung der Geschäftsbeziehungen, Übersicht über deren Art und Umfang, zum Beispiel Wareneinkauf, Dienstleistungen, Darlehensverhältnisse und andere Nutzungsüberlassungen sowie Kostenumlagen, und Übersicht über die den Geschäftsbeziehungen zugrunde liegenden Verträge und der Veränderungen innerhalb des Prüfungszeitraums.',
      subsections: [
        {
          title: '1. Inhaltliche Beschreibung der Geschäftsbeziehung',
          description: 'Beschreibung mit einfachen Worten: Wer erbringt Was an Wen? Steht die Geschäftsbeziehung im Zusammenhang mit weiteren Geschäftsbeziehungen? Hintergrundinformationen zur Geschäftsbeziehung? Aus der Antwort sollte ersichtlich werden, aus welchen geschäftlichen Erwägungen heraus und vor welchem Hintergrund die Geschäftsbeziehung abgeschlossen wurde.',
          questions: [
            {
              title: '',
              id: 'beschreibungTransaktion',
              description: '',
              hint: '',
              input: {
                text: '',
                type: 'comment',
                placeholder: 'Bitte detailliert beschreiben.',
                default: '',
                required: true
              }
            }
          ]
        },
        {
          title: '2. Werden bei der Leistungserbringung wesentliche (immaterielle) Vermögenswerte eingesetzt?',
          description: '',
          questions: [
            {
              title: '',
              id: 'einsatzIWG',
              description: '',
              hint: '',
              input: {
                text: '',
                type: 'boolean',
                placeholder: '',
                default: 'false',
                required: true
              }
            },
            {
              title: '2.1. Beschreibung der eingesetzten immateriellen Wirtschaftsgüter',
              id: 'einsatzIWGBeschreibung',
              description: '',
              hint: '',
              visibleIf: 'einsatzIWG',
              input: {
                text: '',
                type: 'comment',
                placeholder: 'Bitte beschreiben',
                default: '',
                required: true
              }
            },
            {
              title: '2.2. Prüfung von Quellensteuereinbehalt',
              id: 'einsatzIWGQueSt',
              description: 'In besonderen Fällen ist der Empfänger von Dienstleistungen (z.B. Nutzngsüberlassungen) i.Z.m. immateriellen Wirtschaftsgütern (wie z.B. Softwarelizenzen) zum Einbehalt von Quellensteuern verpflichtet. Auf die Anforderungen gem. dem [Steuerhandbuch zu Quellensteuern](http://google.com) wird verwiesen.<br><br>Im Folgenden ist zu beschreiben, ob der Geschäftsvorfall zur Entstehung von Quellensteuern führt und falls ja, wie deren Anmeldung und Abführung an das Finanzamt sichergestellt wird.',
              hint: '',
              visibleIf: 'einsatzIWG',
              input: {
                text: '',
                type: 'comment',
                placeholder: 'Bitte kurz beschreiben und ggf. eigene Dokumentation/Meldung i.S.d. Handbuchs Quellensteuern.',
                default: '',
                required: true
              }
            }
          ]
        },
        {
          title: '3. Darstellung der vereinbarten Konditionen',
          description: 'Zur Überprüfung der hier beschriebenen Konditionen sind aussagekräftige Unterlagen - d.h. insb. Kopien der unterzeichneten Verträge - beizufügen.',
          questions: [
            {
              title: '3.1. Beschreibung des vereinbarten Entgelts sowie Darstellung der Ermittlung',
              id: 'konditionenEntgelt',
              description: '',
              hint: 'Soweit die Höhe des Entgelts rechnerisch zu ermitteln ist, sind die einzelnen Rechenbestandteile sowie deren Bestimmung/Ermittlung detailliert darzustellen (insb. bei der Cost-Plus-Methode sind z.B. Angaben zur Bestimmung der Kostenbasis zu machen).',
              input: {
                text: '',
                type: 'comment',
                placeholder: '',
                default: '',
                required: true
              }
            },
            {
              title: '3.2. Besondere Vertragsbestandteile',
              id: 'konditionenBesondereBestandteile',
              description: `Soweit der Vertrag Bestandteile beinhaltet, die sich unter fremden Dritten auf die Höhe des vereinbarten Preises ausgewirkt hätten, sind diese zu beschreiben. Hierzu zählen z.B.<br>
              - Vereinbarungen über Zahlungsziele
              - Vorhandene Preisanpassungeklauseln, die zu einer nachträglichen Preisänderung führen
              - Kündigungsmodalitäten
              `,
              hint: '',
              input: {
                text: '',
                type: 'comment',
                placeholder: 'Bitte beschreiben',
                default: '',
                required: true
              }
            },
            {
              title: '3.3. Auswirkung auf die Gewinn- und Verlustrechnung',
              id: 'konditionenGuV',
              description: '',
              hint: 'Diese Angaben dienen zur Überprüfung der getroffenen Vereinbarung anhand der tatsächlich gebuchten Erträge und Aufwendungen. Hierzu sollte kurz beschrieben werden, wie sich die Geschäftsbeziehung in der GuV niederschlägt sowie Bilanz/GuV-Konten genannt werden, auf denen die entsprechenden Buchungen erfolgen.',
              input: {
                text: '',
                type: 'comment',
                placeholder: '',
                default: '',
                required: false
              }
            }
          ]
        },
        {
          title: '4. Funktions- und Risikoanalyse',
          description: 'Zur Kategorisierung der Geschäftsbeziehung - insb. auch im Hinblick auf die Wahl der Verrechnungspreismethode - ist es erforderlich darzulegen, welche Funktionen, Chancen und Risiken von den einzelnen Vertragsparteien wahrgenommen werden.',
          questions: [
            {
              title: '4.1. Welche Funktionen werden vom Leistungserbringer/-empfänger ausgeübt?',
              id: 'funktionDarstellung',
              description: 'Zur Erfüllung der Dokumentationsanforderungen sind die Funktionen der beteiligten Parteien in Textform zu darzustellen, dass sich hieraus ein nachvollziehbares Gesamtbild ergibt. **WICHTIG: Eine bloße Aufzählung von Stichpunkten ist hier nicht ausreichend!**',
              hint: 'Z.B. Marketing, Entwicklung/Konzeption, nachvertragliche Betreuung (after-sales sercice), Buchhaltung, Rechnungserstellung, Zahlungsabwicklung, Management-, Finanz- und Rechts-angelegenheiten, etc.',
              input: {
                text: '',
                type: 'comment',
                placeholder: '',
                default: '',
                required: true
              }
            },
            {
              title: '4.2. Welche und in welchem Umfang trägt der Leistungserbringer/-empfänger Chancen und Risiken?',
              id: 'chancenRisikien',
              description: '',
              hint: 'Z.B. Kostenrisiko, Risiko des Erfolgs der Gesamtleistung, Währungsrisiko, Forderungsausfallrisiko, etc.',
              input: {
                text: '',
                type: 'comment',
                placeholder: 'Bitte beschreiben',
                default: '',
                required: true
              }
            }
          ]
        },
        {
          title: '5. Anlagen zur Sachverhaltsdokumentation',
          description: `Zur Überprüfung der gemachten Angaben sind aussagekräftige Unterlagen beizufügen (siehe oben: bitte Upload-Funktion nutzen). Dies sind insbesondere:
          - Kopien der unterzeichneten Verträge inkl. sämtlicher Rahmenverträge und Side-Letter auf die darin Bezug genommen wird.
          - Vertragsergänzungen/Änderungen
          - Rechnungskopien; d.h. Abschlags-/Endabrechnungen sowie Rechnungsanhänge (z.B. Stunden-/Tätigkeitsnachweise)`,
          questions: []
        }
      ]
    },
    {
      title: 'B. Angemessenheit/Verrechnungspreisanalyse',
      description: '§ 4 Abs. 1 Nr. 4 GAufzV: Dieser Teil der Dokumentation soll es einem Dritten ermöglichen nachzuvollziehen, welche Überlegungen bei der Preisgestaltung angestellt wurden, welche Verrechnungspreismethoden angewandt wurden und inwiefern der vereinbarte Preis dem Fremdvergleichsgrundsatz entspricht.',
      subsections: [
        {
          title: '1. Zeitpunkt der Verrechnungspreisbestimmung',
          description: '',
          questions: [
            {
              title: '',
              id: 'zeitpunktPreisbestimmung',
              description: '',
              hint: 'Im Verhältnis zu fremden Dritten werden Überlegungen zur Preisgestaltung regelmäßig im Rahmen des Vertragsabschlusses und nicht erst im Nachhinein angestellt. Da sich (Markt-)Preise im Zeitablauf ändern können, ist im Rahmen der Dokumentation anzugeben, in welchem Zeitpunkt das Unternehmen den lt. Vertrag vereinbarten Preis bestimmt hat.',
              input: {
                text: '',
                type: 'comment',
                placeholder: 'Bitte beschreiben.',
                default: '',
                required: true
              }
            }
          ]
        },
        {
          title: '2. Besondere Umstände, die bei der Verrechnungspreisbestimmung zu berücksichtigen sind',
          description: '',
          questions: [
            {
              title: '',
              id: 'besondereUmstaende',
              description: '',
              hint: 'Werden z.B. vergleichbare Leistungen auch an fremde Dritte erbracht oder von fremden Dritten bezo-gen? Wenn ja: Unterscheiden sich diese von der hier beschriebenen Geschäftsbeziehung?',
              input: {
                text: '',
                type: 'comment',
                placeholder: 'Bitte beschreiben',
                default: '',
                required: true
              }
            }
          ]
        },
        {
          title: '3. Darstellung und Begründung der Geeignetheit der angewandten Verrechnungspreismethode',
          description: 'Vorrangig sind Verrechnungspreise nach den sog. „Standardmethoden“ (s.u.) zu ermitteln. Da diese einander gleichwertig gegenüber stehen, ist deren Anwendbarkeit im Einzelfall zu prüfen und ggf. zu begründen, warum eine Anwendung der ein oder anderen Methode nicht in Betracht kommt. Soweit die Methoden zu nur eingeschränkt vergleichbaren Preisen führen (erfahrungsgemäß ist dies der Regelfall), sind vorgenommene Anpassungen zu beschreiben. Für den Fall, dass eine Preisermittlung nach den Standardmethoden ausscheidet, ist die im Rahmen eines hypothetischen Fremdvergleichs vorzunehmende Preisermittlung detailliert darzustellen, zu begründen und mit der Steuerabteilung abzustimmen. Für eine nähere Beschreibung der einzelnen Methoden wird auch auf das Handbuch Verrechnungspreise verwiesen.',
          questions: [
            {
              title: '3.1. Preisvergleichsmethode (direkt/indirekt)',
              id: 'preisvergleichsmethodeAnwendbar',
              description: 'Die [Preisvergleichsmethode](http://www.google.com) eignet sich für die Ermittlung/Dokumentation von Fremdvergleichswerten',
              hint: '',
              input: {
                text: '',
                type: 'boolean',
                placeholder: '',
                default: '',
                required: true
              }
            },
            {
              title: '',
              id: 'preisvergleichsmethodeBeschreibung',
              description: 'Begründung',
              hint: 'Im Falle einer Anwendbarkeit ist das Ergebnis der Fremdvergleichsanalyse (der ermittelte Preis/die ermittelte Bandbreite) darzustellen.',
              input: {
                text: '',
                type: 'comment',
                placeholder: '',
                default: '',
                required: false
              }
            },
            {
              title: '3.2. Wiederverkaufspreismethode',
              id: 'wiederverkaufspreismethodeAnwendbar',
              description: 'Die [Wiederverkaufspreismethode](http://www.google.com) eignet sich für die Ermittlung/Dokumentation von Fremdvergleichswerten',
              hint: '',
              input: {
                text: '',
                type: 'boolean',
                placeholder: '',
                default: '',
                required: true
              }
            },
            {
              title: '',
              id: 'wiederverkaufspreismethodeBeschreibung',
              description: 'Begründung',
              hint: 'Im Falle einer Anwendbarkeit ist das Ergebnis der Fremdvergleichsanalyse (der ermittelte Preis/die ermittelte Bandbreite) darzustellen.',
              input: {
                text: '',
                type: 'comment',
                placeholder: '',
                default: '',
                required: false
              }
            },
            {
              title: '3.3. Kostenaufschlagsmethode',
              id: 'kostenaufschlagsmethodeAnwendbar',
              description: 'Die [Kostenaufschlagsmethode](http://www.google.com) eignet sich für die Ermittlung/Dokumentation von Fremdvergleichswerten',
              hint: '',
              input: {
                text: '',
                type: 'boolean',
                placeholder: '',
                default: '',
                required: true
              }
            },
            {
              title: '',
              id: 'kostenaufschlagsmethodeBeschreibung',
              description: 'Begründung',
              hint: 'Im Falle einer Anwendbarkeit ist das Ergebnis der Fremdvergleichsanalyse (der ermittelte Preis/die ermittelte Bandbreite) darzustellen.',
              input: {
                text: '',
                type: 'comment',
                placeholder: '',
                default: '',
                required: false
              }
            },
            {
              title: '3.4. Anwendung gewinnorientierter Methoden',
              id: 'gewinnmethodeBeschreibung',
              description: 'Gewinnorientierte Methoden kommen nur dann in Betracht, wenn die Anwendbarkeit der o.g. Standardmethoden ausgeschlossen ist. Da es sich hierbei um Sonderfälle handeln sollte, ist die **Steuerabteilung hinzuzuziehen**.',
              hint: '',
              input: {
                text: '',
                type: 'comment',
                placeholder: 'Begründung der Anwendbarkeit und Darstellung der angewandten gewinnorientierten Methode',
                default: '',
                required: true
              }
            }
          ]
        },
        {
          title: '4. Aufbauend auf Punkt 3: Berechnung des Fremdvergleichspreises',
          description: 'Das Zustandekommen des angesetzten Fremdvergleichspreises muss für einen sachverständigen Dritten ohne weiteres nachvollziehbar sein. Aus diesem Grund sind neben einer (ggf. verbalen) Be-schreibung des Rechenwegs auch sämtliche Unterlagen aufzulisten und beizufügen, die für die Berechnung erforderlich sind.',
          questions: [
            {
              title: '',
              id: 'berechnungFremdvergleichspreis',
              description: '',
              hint: 'Bei Anwendung der Kostenaufschlagsmethode: Beschreibung der Bemessungsgrundlage (Ist-/Plankosten, Vollkosten?)',
              input: {
                text: '',
                type: 'comment',
                placeholder: '',
                default: '',
                required: true
              }
            }
          ]
        },
        {
          title: '5. Wurde die Geschäftsbeziehung durch eine ausländische Finanzbehörde bereits untersucht?',
          description: 'Relevant sind in diesem Zusammenhang u.a. Informationen über beantragte oder abgeschlossene Verständigungs- oder Schiedsstellenverfahren, unilaterale Verrechnungspreiszusagen und sonstige steuerliche Vorabzusagen ausländischer Steuerverwaltungen sowie abgeschlossene Betriebsprüfungen (tax audits), die zu einer Anpassung des Verrechnungspreises führen/geführt haben.',
          questions: [
            {
              title: '',
              id: 'beziehungImAuslandGeprueft',
              description: '',
              hint: '',
              input: {
                text: '',
                type: 'boolean',
                placeholder: '',
                default: '',
                required: true
              }
            },
            {
              title: '',
              id: 'beziehungImAuslandGeprueftErgebnis',
              description: 'Zu welchem Ergebnis kam die Prüfung der Geschäftsbeziehung im Ausland?',
              hint: '',
              visibleIf: 'beziehungImAuslandGeprueft',
              input: {
                text: '',
                type: 'comment',
                placeholder: '',
                default: '',
                required: true
              }
            }
          ]
        },
        {
          title: '6. Dauerverluste bei einer Geschäftspartei',
          description: '6. Soweit die Geschäftsbeziehung in mehr als drei aufeinander folgenden Wirt-schaftsjahren zu Verlusten bei einer Geschäftspartei führt: Beschreibung der Ur-sache von Verlusten und über Vorkehrungen zur Beseitigung der Verlustsituation.<br><br>Unter fremden Dritten würden dauerhafte Verluste dazu führen, dass die betroffene Geschäftspartei den Vertrag im Rahmen ihrer Möglichkeiten kündigt, um weiteren Schaden abzuwenden. Dieser Maßstab gilt auch für gruppeninterne Geschäftsbeziehungen. Soweit dennoch daran festgehalten wird, sind die Gründe hierfür detailliert darzulegen.',
          questions: [
            {
              title: '',
              id: 'dauerverluste',
              description: 'Die Geschäftsbeziehung führte in drei aufeinanderfolgenden Jahren bei einer Geschäftspartei zu Verlusten',
              hint: '',
              input: {
                text: '',
                type: 'boolean',
                placeholder: '',
                default: '',
                required: true
              }
            },
            {
              title: '',
              id: 'dauerverlusteBeschreibung',
              description: 'Begründung, warum an der Geschäftsbeziehung trotz dauerdefizitärer Situation festgehalten wurde.',
              hint: '',
              visibleIf: 'dauerverluste',
              input: {
                text: '',
                type: 'comment',
                placeholder: '',
                default: '',
                required: true
              }
            }
          ]
        },
        {
          title: '7. Anlagen zur Angemessenheitsdokumentation',
          description: `Zur Überprüfung der gemachten Angaben sind aussagekräftige Unterlagen beizufügen (siehe oben: bitte Upload-Funktion nutzen). Dies sind insbesondere:
          - Angebote/Preislisten fremder Dritter
          - Unterlagen, aus denen sich die Berechnung des Fremdvergleichspreises ergibt
          - Sonstige Unterlagen, die eine Angemessenheit begründen`,
          questions: []
        }
      ]
    }
  ]
}
