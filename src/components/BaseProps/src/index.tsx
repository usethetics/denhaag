import React from 'react';

/**
 * An interface which supplies the most standard properties of each component.
 */
export default interface BaseProps {
  /**
   * The contents of the component.
   */
  children?: React.ReactNode;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, unknown>;

  /**
   * The tab-index applied to the root element of the component.
   */
  tabIndex?: number;

  /**
   * The id attribute is used to specify a unique id for an HTML element.
   */
  id?: string;

  /**
   * Extend the styles of the component by adding new classes.
   */
  className?: string;
}

/**
 * An interface which supplies only the 'children' property.
 */
export interface BaseChildrenProps {
  /**
   * The contents of the component.
   */
  children?: React.ReactNode;
}

/**
 * An interface which supplies only the 'classes' property.
 */
export interface BaseClassesProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, unknown>;
}
