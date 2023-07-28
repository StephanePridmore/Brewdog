import { screen } from '@testing-library/react';

export const checkComponentWithText = (text: string | RegExp): void => {
  const component = screen.getByText(text);
  expect(component).toBeInTheDocument();
};

export const checkComponentTextByCssClass = (
  component: HTMLElement,
  cssClass: string,
  expectedText: string,
): void => {
  expect(component).toBeInTheDocument();
  const name = component.getElementsByClassName(cssClass)[0];
  expect(name.textContent).toEqual(expectedText);
};

export const checkComponentAttribute = (
  component: HTMLElement,
  attribute: string,
  expectedText: string,
): void => {
  expect(component).toBeInTheDocument();
  const src = component.getAttribute(attribute);
  expect(src).toEqual(expectedText);
};
