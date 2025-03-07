import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import Button from '@gemeente-denhaag/button';
import { Heading4, Paragraph } from '@gemeente-denhaag/typography';
import { AlertTriangleIcon, CheckCircleIcon, CircleInformationIcon, CloseIcon } from '@gemeente-denhaag/icons';
import IconButton from '@gemeente-denhaag/iconbutton';

import './alert.css';
import clsx from 'clsx';

export interface AlertProps extends Omit<BaseProps, 'children' | 'classes' | 'tabIndex'> {
  /**
   * The title of the alert.
   */
  title: string;

  /**
   * The main text of the alert.
   */
  text: string;

  /**
   * The variant of the alert, determines which color and icon are displayed.
   */
  variant: 'error' | 'info' | 'success' | 'warning';

  /**
   * The support icon shown top-left.
   * When left undefined, a default icon corresponding to 'variant' is provided.
   */
  supportIcon?: React.ReactNode;

  /**
   * The action of the alert, displays a clickable button that will fire this event.
   */
  action?: { buttonText: string; onClick: () => void };

  /**
   * The action of the alert, displays a clickable CloseIcon Button that will fire this event.
   */
  close?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Alert: React.FC<AlertProps> = ({
  id,
  title,
  text,
  variant,
  action,
  close,
  supportIcon,
  className,
}: AlertProps) => {
  const rootClassNames = clsx('denhaag-alert', `denhaag-alert--${variant}`, className);
  let icon;

  if (supportIcon !== undefined) {
    icon = supportIcon;
  } else {
    switch (variant) {
      case 'error':
        icon = <AlertTriangleIcon />;
        break;
      case 'info':
        icon = <CircleInformationIcon />;
        break;
      case 'success':
        icon = <CheckCircleIcon />;
        break;
      case 'warning':
        icon = <AlertTriangleIcon />;
        break;
    }
  }

  return (
    <div id={id} className={rootClassNames}>
      <div className="denhaag-alert__main-content">
        <div className="denhaag-alert__icon">{icon}</div>
        <div className="denhaag-alert__content">
          <Heading4>{title}</Heading4>
          <Paragraph>{text}</Paragraph>
          {action && (
            <Button size="medium" variant="primary-action" type="button" onClick={() => action.onClick()}>
              {action.buttonText}
            </Button>
          )}
        </div>
      </div>
      {close && (
        <div className="denhaag-alert__close">
          <IconButton aria-label="Close" onClick={close} tabIndex={0}>
            <CloseIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Alert;
