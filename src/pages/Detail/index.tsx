import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ArrowLeft from '../../assets/images/arrowLeft.png';

import * as S from './styles';

const Detail = () => {
  const location = useLocation();

  const data = useMemo(() => (location?.state as any).data, [location?.state]);

  console.log(data);
  return (
    <S.Container>
      <S.BoxHeader image={data.image}>
        <S.BoxSection>
          <S.BoxBack>
            <S.Back to={'/'}>
              <img src={ArrowLeft} alt="icon back" />
              <S.LinkButton>Voltar</S.LinkButton>
            </S.Back>
          </S.BoxBack>
          <S.BoxInfo>
            <S.BoxLogo>
              <S.Logo image={data.logo} />
            </S.BoxLogo>
            <S.BoxText>
              <S.Title>{data.name}</S.Title>
              <S.Infos>{data.telephone}</S.Infos>
              <S.Infos>{data.website}</S.Infos>
            </S.BoxText>
          </S.BoxInfo>
        </S.BoxSection>
      </S.BoxHeader>
      <S.Box>
        <S.BoxDescription>
          <S.TextDescription>Descrição</S.TextDescription>
          <S.TextInfos size lineHeight colorText>
            {data.description}
          </S.TextInfos>
          <S.TextDescription mTop="20px">Faixa de preço</S.TextDescription>
          <S.TextInfos>{data.price_range}</S.TextInfos>
          <S.LineDivisor />
          <S.TextDescription>Horários de Funcionamento</S.TextDescription>
          <S.TextInfos>{data.opening_hours}</S.TextInfos>
          <S.TextDescription mTop="20px">Formas de pagamento</S.TextDescription>
          <S.TextInfos>{data.payment_methods}</S.TextInfos>
        </S.BoxDescription>
      </S.Box>
    </S.Container>
  );
};

export default Detail;
