import React, { useEffect } from 'react';
import removeIndentation from './CodePanel/removeIndentation';
import useToast from '../Hooks/useToast';
import './CodePanel/Style.scss';

interface CodePanelProps {
  children: React.ReactNode;
  onInput?: (text: string) => void;
  title: string;
}

export default React.memo(({ children, onInput = () => {}, title}: CodePanelProps) => {

  const
  code = removeIndentation(children as string),
  toast = useToast();

  useEffect(() => onInput(code), [onInput, code]);

  return (
    <div className="panel language-markup">
      <h3>{title}</h3>
      <button
      className="reset"
      onClick={e => {
        const text = e.currentTarget.parentNode!.querySelector('code')!.textContent!;
        navigator.clipboard.writeText(text)
        .then(() => toast('copied to clipboard'))
        .catch(() => toast('copy to clipboard failed'));       
      }}>
        Copy to Clipboard
      </button>
      <pre>
        <code
        contentEditable
        spellCheck="false"
        suppressContentEditableWarning={true}
        onInput={e => {
          const el = e.target as HTMLElement;
          onInput(el.textContent as string);
        }}>
          {code}
        </code>
      </pre>
    </div>
  );
});