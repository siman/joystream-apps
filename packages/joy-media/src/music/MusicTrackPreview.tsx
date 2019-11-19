import React, { useState } from 'react';
import { Button, Checkbox, CheckboxProps } from 'semantic-ui-react';

type OnCheckboxChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => void;

export type MusicTrackPreviewProps = {
  title: string,
  artist: string,
  cover: string,
  position?: number,
  selected?: boolean,
  onSelect?: OnCheckboxChange,
  isDraggable?: boolean,
  withEditButton?: boolean,
  withRemoveButton?: boolean,
  withActionLabels?: boolean
};

export function MusicTrackPreview (props: MusicTrackPreviewProps) {
  const { withActionLabels = false, selected = false } = props;
  const [checked, setChecked] = useState(selected);

  const onChange: OnCheckboxChange = (e, d) => {
    try {
      props.onSelect && props.onSelect(e, d);
    } catch (err) {
      console.log('Error during checkbox change:', err);
    }
    setChecked(d.checked || false);
  }

  return <div className={`JoyMusicTrackPreview ${checked && `SelectedItem`} ${props.isDraggable && `DraggableItem`}`}>
    {props.onSelect && <div className='CheckboxCell'>
      <Checkbox checked={checked} onChange={onChange} />
    </div>}
    {props.position && <div className='AlbumNumber'>{props.position}</div>}
    <div className='AlbumCover'>
      <img src={props.cover} />
    </div>
    <div className='AlbumDescription'>
      <h3 className='AlbumTitle'>{props.title}</h3>
      <div className='AlbumArtist'>{props.artist}</div>
    </div>
    <div className='AlbumActions'>
      {props.withEditButton && <Button icon='pencil' content={withActionLabels ? 'Edit' : null} />}
      {props.withRemoveButton && <Button icon='trash' content={withActionLabels ? 'Remove from album' : null} />}
    </div>
  </div>;
}