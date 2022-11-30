export interface productOption {
  readonly value: string;
  readonly label: string;
  readonly description: string;
  readonly tam: number;
  readonly price: number;
}

export const productsOptions: readonly productOption[] = [
  {
    value: "1",
    label: "AÇAí - 300",
    description: "TIQUIM - 300ml",
    tam: 300,
    price: 9.0,
  },
  {
    value: "2",
    label: "AÇAí - 400",
    description: "CADIM - 400ml",
    tam: 400,
    price: 10.0,
  },
  {
    value: "3",
    label: "AÇAí - 500",
    description: "BITELA - 500ml",
    tam: 500,
    price: 13.0,
  },
  {
    value: "4",
    label: "AÇAí - 700",
    description: "BRUTO - 700ml",
    tam: 600,
    price: 18.0,
  },
];

// export const productsOptions = [
//   { value: "1", label: "AÇAí - 300" },
//   { value: "2", label: "AÇAí - 400" },
//   { value: "3", label: "AÇAí - 500" },
//   { value: "4", label: "AÇAí - 700" },
// ];

export const complementsOption = [
  { value: "1", label: "amendoim granulado", price: 3.0 },
  { value: "2", label: "banana", price: 3.0 },
  { value: "3", label: "gota de chocolate", price: 3.0 },
  { value: "4", label: "granola", price: 3.0 },
  { value: "5", label: "granulado de chocolate", price: 3.0 },
  { value: "6", label: "paçoca", price: 3.0 },
  { value: "7", label: "sucrilhos", price: 3.0 },
  { value: "8", label: "disqueti", price: 3.5 },
  { value: "9", label: "bombom ouro branco", price: 3.5 },
  { value: "10", label: "bombom sonho de valsa", price: 3.5 },
  { value: "11", label: "doce de leite", price: 3.5 },
  { value: "12", label: "leite condensado", price: 3.5 },
  { value: "13", label: "leite em pó", price: 3.5 },
  { value: "14", label: "ovomaltine pó", price: 3.5 },
  { value: "15", label: "polpa de morango", price: 4.5 },
  { value: "16", label: "bão com força! (avelã)", price: 5.0 },
  { value: "17", label: "de lamber os beiço (ninho)", price: 5.0 },
  { value: "18", label: "ovomaltine crocante", price: 5.0 },
];
