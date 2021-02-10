export const expectToBeInputFieldOfTypeText = (formElement: HTMLInputElement) => {
  expect(formElement).not.toBeNull();
  expect(formElement.tagName).toEqual('INPUT');
  expect(formElement.type).toEqual('text');
};
