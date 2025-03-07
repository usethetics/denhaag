import React from 'react';
import BaseDataDisplayProps from '@gemeente-denhaag/basedatadisplayprops';
import './paragraph.css';
import clsx from 'clsx';

export type ParagraphProps = Omit<BaseDataDisplayProps, 'classes'>;

export const Paragraph: React.FC<ParagraphProps> = (props: ParagraphProps) => {
  const rootClassNames = clsx('utrecht-paragraph', 'utrecht-paragraph--distanced', props.className);
  return <p className={rootClassNames}> {props.children}</p>;
};
