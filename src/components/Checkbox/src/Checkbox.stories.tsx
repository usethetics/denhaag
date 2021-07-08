/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '.';
import FormControlLabel from '../../FormControlLabel';
import pkg from '../package.json';

export default {
  title: 'Components/Input/Checkbox',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args: CheckboxProps) => (
  <FormControlLabel label="Checkbox" control={<Checkbox {...args} />} />
);

// language=JS
const defaultCode = `
<FormControlLabel label='Checkbox'>
  <Checkbox onChange='{}'/>
</FormControlLabel>
`;

// language=JS
const disabledCode = `
<FormControlLabel label="Checkbox">
  <Checkbox onChange="{}" disabled/>
</FormControlLabel>
`;

/**
 * Default Checkbox
 */
export const Default: Story<CheckboxProps> = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};

/**
 * Disabled Checkbox
 */
export const Disabled: Story<CheckboxProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: disabledCode,
    },
  },
};

/**
 * Error Checkbox
 */
export const Error: Story<CheckboxProps> = Template.bind({});
Error.args = {
  color: 'error',
};

Error.parameters = {
  docs: {
    source: {
      code: disabledCode,
    },
  },
};

const HTMLTemplate: Story<CheckboxProps> = () => (
  <div>
    <div>
      <p className="utrecht-heading-5">Default</p>
      <label className="denhaag-form-control-label">
        <span className="denhaag-checkbox denhaag-checkbox--checked" aria-disabled="false">
          <input className="denhaag-checkbox__input" type="checkbox" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 24 24"
            className="denhaag-checkbox__icon"
            focusable="false"
            aria-hidden="true"
            shapeRendering="auto"
          >
            <rect
              x="-9.5"
              y="-9.5"
              rx="0.5"
              ry="0.5"
              width="19"
              height="19"
              transform="translate(12 12)"
              stroke="currentColor"
              fill="currentColor"
            ></rect>
            <path
              d="M17.663 8l-7.333 7.333L6.997 12"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            ></path>
          </svg>
        </span>
        <span className="denhaag-form-control-label__label">Checkbox</span>
      </label>
      <label className="denhaag-form-control-label">
        <span className="denhaag-checkbox" aria-disabled="false">
          <input className="denhaag-checkbox__input" type="checkbox" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="denhaag-checkbox__icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            shapeRendering="auto"
          >
            <rect
              x="-9.5"
              y="-9.5"
              rx="0.5"
              ry="0.5"
              width="19"
              height="19"
              transform="translate(12 12)"
              stroke="currentColor"
              fill="#fff"
            ></rect>
          </svg>
        </span>
        <span className="denhaag-form-control-label__label">Checkbox</span>
      </label>
    </div>
    <div>
      <p className="utrecht-heading-5">Disabled</p>
      <label className="denhaag-form-control-label denhaag-form-control-label--disabled">
        <span className="denhaag-checkbox denhaag-checkbox--disabled" aria-disabled="true" tabIndex={-1}>
          <input className="denhaag-checkbox__input" type="checkbox" disabled />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="denhaag-checkbox__icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            shapeRendering="auto"
          >
            <rect
              x="-9.5"
              y="-9.5"
              rx="0.5"
              ry="0.5"
              width="19"
              height="19"
              transform="translate(12 12)"
              stroke="currentColor"
              fill="#fff"
            ></rect>
          </svg>
        </span>
        <span className="denhaag-form-control-label__label">Checkbox</span>
      </label>
    </div>
    <div>
      <p className="utrecht-heading-5">Error</p>
      <label className="denhaag-form-control-label">
        <span className="denhaag-checkbox denhaag-checkbox--error denhaag-checkbox--checked" aria-disabled="false">
          <input className="denhaag-checkbox__input" type="checkbox" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 24 24"
            className="denhaag-checkbox__icon"
            focusable="false"
            aria-hidden="true"
            shapeRendering="auto"
          >
            <rect
              x="-9.5"
              y="-9.5"
              rx="0.5"
              ry="0.5"
              width="19"
              height="19"
              transform="translate(12 12)"
              stroke="currentColor"
              fill="currentColor"
            ></rect>
            <path
              d="M17.663 8l-7.333 7.333L6.997 12"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            ></path>
          </svg>
        </span>
        <span className="denhaag-form-control-label__label">Checkbox</span>
      </label>
      <label className="denhaag-form-control-label">
        <span className="denhaag-checkbox denhaag-checkbox--error" aria-disabled="false">
          <input className="denhaag-checkbox__input" type="checkbox" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="denhaag-checkbox__icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            shapeRendering="auto"
          >
            <rect
              x="-9.5"
              y="-9.5"
              rx="0.5"
              ry="0.5"
              width="19"
              height="19"
              transform="translate(12 12)"
              stroke="currentColor"
              fill="#fff"
            ></rect>
          </svg>
        </span>
        <span className="denhaag-form-control-label__label">Checkbox</span>
      </label>
    </div>
  </div>
);

// language=JS
const htmlUnchecked = `
<label class="denhaag-form-control-label">
  <span class="denhaag-checkbox" aria-disabled="false">
    <input class="denhaag-checkbox__input" type="checkbox" />
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="denhaag-checkbox__icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" shape-rendering="auto">
      <rect x="-9.5" y="-9.5" rx="0.5" ry="0.5" width="19" height="19" transform="translate(12 12)" stroke="currentColor" fill="#fff"></rect>
    </svg>
  </span>
  <span class="denhaag-form-control-label__label">Checkbox</span>
</label>
`;

// language=JS
const htmlChecked = `
<label class="denhaag-form-control-label">
  <span class="denhaag-checkbox denhaag-checkbox--checked" aria-disabled="false">
    <input class="denhaag-checkbox__input" type="checkbox" />
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" class="denhaag-checkbox__icon" focusable="false" aria-hidden="true" shape-rendering="auto">
      <rect x="-9.5" y="-9.5" rx="0.5" ry="0.5" width="19" height="19" transform="translate(12 12)" stroke="currentColor" fill="currentColor"></rect>
      <path d="M17.663 8l-7.333 7.333L6.997 12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
    </svg>
  </span>
  <span class="denhaag-form-control-label__label">Checkbox</span>
</label>
`;

// language=JS
const htmlDisabled = `
<label class="denhaag-form-control-label denhaag-form-control-label--disabled">
  <span class="denhaag-checkbox denhaag-checkbox--disabled" aria-disabled="true" tabindex="-1">
    <input class="denhaag-checkbox__input" type="checkbox" disabled />
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="denhaag-checkbox__icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" shape-rendering="auto">
      <rect x="-9.5" y="-9.5" rx="0.5" ry="0.5" width="19" height="19" transform="translate(12 12)" stroke="currentColor" fill="#fff"></rect>
    </svg>
  </span>
  <span class="denhaag-form-control-label__label">Checkbox</span>
</label>
`;

// language=JS
const htmlErrorUnchecked = `
<label class="denhaag-form-control-label">
  <span class="denhaag-checkbox denhaag-checkbox--error" aria-disabled="false">
    <input class="denhaag-checkbox__input" type="checkbox" />
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="denhaag-checkbox__icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" shape-rendering="auto">
      <rect x="-9.5" y="-9.5" rx="0.5" ry="0.5" width="19" height="19" transform="translate(12 12)" stroke="currentColor" fill="#fff"></rect>
    </svg>
  </span>
  <span class="denhaag-form-control-label__label">Checkbox</span>
</label>
`;

// language=JS
const htmlErrorChecked = `
<label class="denhaag-form-control-label">
  <span class="denhaag-checkbox denhaag-checkbox--error denhaag-checkbox--checked" aria-disabled="false">
    <input class="denhaag-checkbox__input" type="checkbox" />
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" class="denhaag-checkbox__icon" focusable="false" aria-hidden="true" shape-rendering="auto">
      <rect x="-9.5" y="-9.5" rx="0.5" ry="0.5" width="19" height="19" transform="translate(12 12)" stroke="currentColor" fill="currentColor"></rect>
      <path d="M17.663 8l-7.333 7.333L6.997 12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
    </svg>
  </span>
  <span class="denhaag-form-control-label__label">Checkbox</span>
</label>
`;

const htmlCode = `
// Unchecked
${htmlUnchecked}

// Checked
${htmlChecked}

// Disabed
${htmlDisabled}

// Error Unchecked
${htmlErrorUnchecked}

// Error Checked
${htmlErrorChecked}
`;

/**
 * Default Checkbox
 */
export const HTMLCheckbox: Story<CheckboxProps> = HTMLTemplate.bind({});
HTMLCheckbox.parameters = {
  docs: {
    source: {
      code: htmlCode,
    },
  },
};
