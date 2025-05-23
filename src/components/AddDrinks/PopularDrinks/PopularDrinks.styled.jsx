import styled from '@emotion/styled';

export const PopularWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    margin-bottom: 140px;
    flex-direction: row;
    gap: 32px;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 0;
  }
`;
export const PopularCoctailsTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  word-wrap: break-word;
  margin-top: 40px;
  margin-bottom: 28px;
  color: ${(props)=>props.theme.mainTextColor};
  transition: color var(--transition);

  @media screen and (min-width: 768px){
    font-size: 24px;
  }
`;

export const PopularCoctailsWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 336px;
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    width: 312px;
  }
`;

export const PopularCoctailsImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`;

export const PopularCoctailsText = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 89px;
  gap: 8px;
`;
export const PopularCoctailsName = styled.p`
  font-size: 16px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
  color: ${(props)=>props.theme.mainTextColor};
  transition: color var(--transition);
`;

export const PopularCoctailsDescription = styled.p`
  height: 63px;
  font-size: 14px;
  font-family: Manrope;
  font-weight: 400;
  line-height: 19px;
  color:  ${(props)=>props.theme.mainTextColor};
  transition: color var(--transition);
`;
