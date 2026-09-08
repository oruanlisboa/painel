# Painel de Vida

Painel de controle financeiro pessoal e de empresa, num arquivo HTML só. Sem servidor,
sem conta, sem nuvem: os dados ficam no navegador de quem usa e num arquivo de backup
que a própria pessoa escolhe.

## O método

- **Os seis potes de T. Harv Eker** — NEC 55%, FFA 10%, EDU 10%, PLAY 10%, LTSS 10%, GIVE 5%.
  Divide primeiro, gasta depois. O pote da liberdade nunca é gasto; o da diversão precisa
  ser esvaziado todo mês.
- **Programa de 90 dias** — ritual da manhã, declarações, depósito diário no pote da
  liberdade, exercício do dia e cinco sucessos. Com os marcos do dia 30, 60 e 90.
- **Orçamento base zero** — a soma dos potes tem que fechar em 100%.
- **Bola de neve e avalanche** para quitação de dívidas.
- **Lucro Primeiro** (Mike Michalowicz) no lado da empresa: faturamento − lucro = despesa.
- **Pró-labore para renda variável** — você se paga o que o pior mês aguenta, e o
  excedente vai para um reservatório.

## O que ele faz

| | |
|---|---|
| Hoje | a única tarefa do dia, o checklist, quanto ainda dá para gastar, o que vence |
| Dinheiro | potes, lançamentos, importação de extrato, contas fixas, metas, dívidas, patrimônio |
| Empresa | Lucro Primeiro, contas a receber, DRE por competência, impostos |
| 90 dias | o programa de condicionamento completo |

**Importa extrato em CSV e OFX** (Nubank, Bradesco, Neon, InfinityPay, ContaSimples),
categoriza por regras que você escreve, e mostra tudo antes de gravar.

## Como usar

Abra `painel-ruan_3.html` no navegador. Só isso.

Para instalar como aplicativo no celular, sirva a pasta por HTTP:

```bash
python3 -m http.server 8899
```

e abra pelo endereço da máquina na rede. No celular: "Adicionar à Tela de Início".

## Backup

Em **Dinheiro → Ajustes → Backup**. No Chrome e no Edge dá para escolher um arquivo
e o painel grava nele sozinho a cada alteração — coloque numa pasta do iCloud ou do
Drive e o backup sobe junto. O painel também guarda uma cópia por dia dentro do
navegador, as dez últimas, com botão de restaurar.

## Privacidade

Nenhum dado sai do dispositivo. Não há servidor, analytics, nem chamada de rede:
o service worker só guarda os arquivos do próprio painel para ele abrir sem internet.
