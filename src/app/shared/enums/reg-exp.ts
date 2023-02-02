export enum ERegExp {
  isNumber = '^(?=.*[0-9])[0-9]{8,}$',
  isCharacter = '^(?=.*[a-zA-Z])[a-zA-Z!]{8,}$',
  isSymbol = '^(?=.*[!@#$%^&*])[!@#$%^&*]{8,}$',
  isNumberCharacter = '^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$',
  isNumberSymbol = '^(?=.*[0-9])(?=.*[!@#$%^&*])[0-9!@#$%^&*]{8,}$',
  isCharacterSymbol = '^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{8,}$',
  isHard = '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$',
}
