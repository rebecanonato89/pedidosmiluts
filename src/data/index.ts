export interface productOption {
  readonly value: string;
  readonly label: string;
  readonly description: string;
  readonly tam: number;
  readonly price: number;
  readonly isPromotion: boolean;
}

export const productsOptions: readonly productOption[] = [
  {
    value: "1",
    label: "AÇAí - 300",
    description: "TIQUIM - 300ml",
    tam: 300,
    price: 9.0,
    isPromotion: false,
  },
  {
    value: "2",
    label: "AÇAí - 400",
    description: "CADIM - 400ml",
    tam: 400,
    price: 10.0,
    isPromotion: false,
  },
  {
    value: "3",
    label: "AÇAí - 500",
    description: "BITELA - 500ml",
    tam: 500,
    price: 13.0,
    isPromotion: false,
  },
  {
    value: "4",
    label: "AÇAí - 700",
    description: "BRUTO - 700ml",
    tam: 600,
    price: 18.0,
    isPromotion: false,
  },
  {
    value: "5",
    label: "AÇAí - 300 - Promoção",
    description: "TIQUIM - 300ml - Promoção",
    tam: 300,
    price: 11.0,
    isPromotion: true,
  },
  {
    value: "6",
    label: "AÇAí - 400 - Promoção",
    description: "CADIM - 400ml - Promoção",
    tam: 400,
    price: 12.0,
    isPromotion: true,
  },
  {
    value: "7",
    label: "AÇAí - 500 - Promoção",
    description: "BITELA - 500ml - Promoção",
    tam: 500,
    price: 15.0,
    isPromotion: true,
  },
  {
    value: "8",
    label: "AÇAí - 700 - Promoção",
    description: "BRUTO - 700ml - Promoção",
    tam: 600,
    price: 20.0,
    isPromotion: true,
  },
];

export const complementsPromotion = [
  "5",
  "6",
  "7",
  "8",
];

export const complementsOption = [
  { value: "1", label: "amendoim granulado", price: 3.0, isPromotion: true },
  { value: "2", label: "banana", price: 3.0, isPromotion: true },
  { value: "3", label: "bombom ouro branco", price: 3.5, isPromotion: false },
  { value: "4", label: "bombom sonho de valsa", price: 3.5, isPromotion: false },
  { value: "5", label: "cobertura de caramelo", price: 2.0, isPromotion: true },
  { value: "6", label: "cobertura de chocolate", price: 2.0, isPromotion: true },
  { value: "7", label: "cobertura de morango", price: 2.0, isPromotion: true },
  { value: "8", label: "creme de avelã", price: 6.0, isPromotion: false },
  { value: "9", label: "creme de ninho", price: 6.0, isPromotion: false },
  { value: "10", label: "creme de ovomaltine crocante", price: 6.0, isPromotion: false },
  { value: "11", label: "disqueti", price: 3.5, isPromotion: false },
  { value: "12", label: "doce de leite", price: 3.5, isPromotion: false },
  { value: "13", label: "gota de chocolate", price: 3.0, isPromotion: false },
  { value: "14", label: "granola", price: 3.0, isPromotion: true },
  { value: "15", label: "granulado de chocolate", price: 3.0, isPromotion: true },
  { value: "16", label: "leite condensado", price: 3.5, isPromotion: true },
  { value: "17", label: "leite em pó", price: 3.5, isPromotion: true },
  { value: "18", label: "morango", price: 4.0, isPromotion: false },
  { value: "19", label: "ovomaltine pó", price: 3.5, isPromotion: false },
  { value: "20", label: "paçoca", price: 3.0, isPromotion: false },
  { value: "21", label: "polpa de morango", price: 4.5, isPromotion: false },
  { value: "22", label: "sucrilhos", price: 3.0, isPromotion: false }
];
