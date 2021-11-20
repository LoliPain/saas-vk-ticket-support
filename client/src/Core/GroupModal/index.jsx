import React from 'react';
import PropTypes from 'prop-types';
import { BaseModalBG, color } from '../../assets/baseStyles';
import {
  GroupModalBox,
  GroupModalClose,
  GroupModalDataName,
  GroupModalDataWrapper,
  GroupModalFooter,
  GroupModalInput,
  GroupModalInputDesc,
  GroupModalInputHelp,
  GroupModalInputName,
  GroupModalInputWrapper,
  GroupModalTitle,
} from './Styles';
import AnyButton from '../../components/AnyButton';
import { emptyGroupData } from '../../App/global';
import { MinimalUserPic } from '../../components/Userpic';

const AdaptiveWrapper = ({ groupData }) => {
  if (groupData !== emptyGroupData) {
    const { err, desc, data } = groupData;
    return (
      <>
        <GroupModalDataWrapper>
          <GroupModalDataName>
            { data.name }
          </GroupModalDataName>
          <MinimalUserPic userUrl={data.previewUrl} size="3" />
        </GroupModalDataWrapper>
        <GroupModalInputWrapper>
          <GroupModalInputName>
            Ключ для работы с API
          </GroupModalInputName>
          <GroupModalInputHelp href="google.com">
            Как получить?
          </GroupModalInputHelp>
          <GroupModalInput placeholder={data.token} disabled={!!data.token} />
          <GroupModalInputDesc err={err}>
            { err || desc }
          </GroupModalInputDesc>
        </GroupModalInputWrapper>
      </>
    );
  }
  const { err, desc } = { err: '', desc: 'Example description' };
  // TODO Retrieve entered token to validate in and set corresponding variables
  return (
    <GroupModalInputWrapper>
      <GroupModalInputName>
        Ключ для работы с API
      </GroupModalInputName>
      <GroupModalInputHelp href="google.com">
        Как получить?
      </GroupModalInputHelp>
      <GroupModalInput />
      <GroupModalInputDesc err={err}>
        { err || desc }
      </GroupModalInputDesc>
    </GroupModalInputWrapper>
  );
};

const GroupModal = ({ groupData, modalControl }) => (
  <BaseModalBG>
    <GroupModalBox>
      <GroupModalTitle>
        Управление группой
      </GroupModalTitle>
      <GroupModalClose onClick={() => modalControl('')} />
      <AdaptiveWrapper groupData={groupData} />
      <GroupModalFooter>
        {groupData.data.name
          ? <AnyButton inline label="Удалить" fill={color.rejected} />
          : <AnyButton disabled inline label="Удалить" fill={color.rejectedLight} />}
        {!groupData.data.name
          ? <AnyButton inline label="Сохранить" fill={color.created} />
          : <AnyButton disabled inline label="Сохранить" fill={color.createdLight} />}
      </GroupModalFooter>
    </GroupModalBox>
  </BaseModalBG>
);

AdaptiveWrapper.propTypes = {
  groupData: PropTypes.shape({
    err: PropTypes.string,
    desc: PropTypes.string,
    data: PropTypes.shape({
      name: PropTypes.string,
      previewUrl: PropTypes.string,
      token: PropTypes.string,
    }),
  }).isRequired,
};

GroupModal.propTypes = {
  modalControl: PropTypes.func.isRequired,
  groupData: PropTypes.shape({
    err: PropTypes.string,
    desc: PropTypes.string,
    data: PropTypes.shape({
      name: PropTypes.string,
      previewUrl: PropTypes.string,
      token: PropTypes.string,
    }),
  }).isRequired,
};

export default GroupModal;
