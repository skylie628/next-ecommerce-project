import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export enum ProductMediaType {
  Image = "IMAGE",
  Video = "VIDEO",
}

export type MetadataInput = {
  /** Key of a metadata item. */
  key: Scalars["String"];
  /** Value of a metadata item. */
  value: Scalars["String"];
};
export type CheckoutLineInput = {
  /**
   * Flag that allow force splitting the same variant into multiple lines by skipping the matching logic.
   *
   * Added in Saleor 3.6.
   */
  forceNewLine?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Fields required to update the object's metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   */
  price?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** The number of items purchased. */
  quantity: Scalars["Int"];
  /** ID of the product variant. */
  variantId: Scalars["ID"];
};

export enum CountryCode {
  Ad = "AD",
  Ae = "AE",
  Af = "AF",
  Ag = "AG",
  Ai = "AI",
  Al = "AL",
  Am = "AM",
  Ao = "AO",
  Aq = "AQ",
  Ar = "AR",
  As = "AS",
  At = "AT",
  Au = "AU",
  Aw = "AW",
  Ax = "AX",
  Az = "AZ",
  Ba = "BA",
  Bb = "BB",
  Bd = "BD",
  Be = "BE",
  Bf = "BF",
  Bg = "BG",
  Bh = "BH",
  Bi = "BI",
  Bj = "BJ",
  Bl = "BL",
  Bm = "BM",
  Bn = "BN",
  Bo = "BO",
  Bq = "BQ",
  Br = "BR",
  Bs = "BS",
  Bt = "BT",
  Bv = "BV",
  Bw = "BW",
  By = "BY",
  Bz = "BZ",
  Ca = "CA",
  Cc = "CC",
  Cd = "CD",
  Cf = "CF",
  Cg = "CG",
  Ch = "CH",
  Ci = "CI",
  Ck = "CK",
  Cl = "CL",
  Cm = "CM",
  Cn = "CN",
  Co = "CO",
  Cr = "CR",
  Cu = "CU",
  Cv = "CV",
  Cw = "CW",
  Cx = "CX",
  Cy = "CY",
  Cz = "CZ",
  De = "DE",
  Dj = "DJ",
  Dk = "DK",
  Dm = "DM",
  Do = "DO",
  Dz = "DZ",
  Ec = "EC",
  Ee = "EE",
  Eg = "EG",
  Eh = "EH",
  Er = "ER",
  Es = "ES",
  Et = "ET",
  Eu = "EU",
  Fi = "FI",
  Fj = "FJ",
  Fk = "FK",
  Fm = "FM",
  Fo = "FO",
  Fr = "FR",
  Ga = "GA",
  Gb = "GB",
  Gd = "GD",
  Ge = "GE",
  Gf = "GF",
  Gg = "GG",
  Gh = "GH",
  Gi = "GI",
  Gl = "GL",
  Gm = "GM",
  Gn = "GN",
  Gp = "GP",
  Gq = "GQ",
  Gr = "GR",
  Gs = "GS",
  Gt = "GT",
  Gu = "GU",
  Gw = "GW",
  Gy = "GY",
  Hk = "HK",
  Hm = "HM",
  Hn = "HN",
  Hr = "HR",
  Ht = "HT",
  Hu = "HU",
  Id = "ID",
  Ie = "IE",
  Il = "IL",
  Im = "IM",
  In = "IN",
  Io = "IO",
  Iq = "IQ",
  Ir = "IR",
  Is = "IS",
  It = "IT",
  Je = "JE",
  Jm = "JM",
  Jo = "JO",
  Jp = "JP",
  Ke = "KE",
  Kg = "KG",
  Kh = "KH",
  Ki = "KI",
  Km = "KM",
  Kn = "KN",
  Kp = "KP",
  Kr = "KR",
  Kw = "KW",
  Ky = "KY",
  Kz = "KZ",
  La = "LA",
  Lb = "LB",
  Lc = "LC",
  Li = "LI",
  Lk = "LK",
  Lr = "LR",
  Ls = "LS",
  Lt = "LT",
  Lu = "LU",
  Lv = "LV",
  Ly = "LY",
  Ma = "MA",
  Mc = "MC",
  Md = "MD",
  Me = "ME",
  Mf = "MF",
  Mg = "MG",
  Mh = "MH",
  Mk = "MK",
  Ml = "ML",
  Mm = "MM",
  Mn = "MN",
  Mo = "MO",
  Mp = "MP",
  Mq = "MQ",
  Mr = "MR",
  Ms = "MS",
  Mt = "MT",
  Mu = "MU",
  Mv = "MV",
  Mw = "MW",
  Mx = "MX",
  My = "MY",
  Mz = "MZ",
  Na = "NA",
  Nc = "NC",
  Ne = "NE",
  Nf = "NF",
  Ng = "NG",
  Ni = "NI",
  Nl = "NL",
  No = "NO",
  Np = "NP",
  Nr = "NR",
  Nu = "NU",
  Nz = "NZ",
  Om = "OM",
  Pa = "PA",
  Pe = "PE",
  Pf = "PF",
  Pg = "PG",
  Ph = "PH",
  Pk = "PK",
  Pl = "PL",
  Pm = "PM",
  Pn = "PN",
  Pr = "PR",
  Ps = "PS",
  Pt = "PT",
  Pw = "PW",
  Py = "PY",
  Qa = "QA",
  Re = "RE",
  Ro = "RO",
  Rs = "RS",
  Ru = "RU",
  Rw = "RW",
  Sa = "SA",
  Sb = "SB",
  Sc = "SC",
  Sd = "SD",
  Se = "SE",
  Sg = "SG",
  Sh = "SH",
  Si = "SI",
  Sj = "SJ",
  Sk = "SK",
  Sl = "SL",
  Sm = "SM",
  Sn = "SN",
  So = "SO",
  Sr = "SR",
  Ss = "SS",
  St = "ST",
  Sv = "SV",
  Sx = "SX",
  Sy = "SY",
  Sz = "SZ",
  Tc = "TC",
  Td = "TD",
  Tf = "TF",
  Tg = "TG",
  Th = "TH",
  Tj = "TJ",
  Tk = "TK",
  Tl = "TL",
  Tm = "TM",
  Tn = "TN",
  To = "TO",
  Tr = "TR",
  Tt = "TT",
  Tv = "TV",
  Tw = "TW",
  Tz = "TZ",
  Ua = "UA",
  Ug = "UG",
  Um = "UM",
  Us = "US",
  Uy = "UY",
  Uz = "UZ",
  Va = "VA",
  Vc = "VC",
  Ve = "VE",
  Vg = "VG",
  Vi = "VI",
  Vn = "VN",
  Vu = "VU",
  Wf = "WF",
  Ws = "WS",
  Ye = "YE",
  Yt = "YT",
  Za = "ZA",
  Zm = "ZM",
  Zw = "ZW",
}
export enum LanguageCodeEnum {
  Af = "AF",
  AfNa = "AF_NA",
  AfZa = "AF_ZA",
  Agq = "AGQ",
  AgqCm = "AGQ_CM",
  Ak = "AK",
  AkGh = "AK_GH",
  Am = "AM",
  AmEt = "AM_ET",
  Ar = "AR",
  ArAe = "AR_AE",
  ArBh = "AR_BH",
  ArDj = "AR_DJ",
  ArDz = "AR_DZ",
  ArEg = "AR_EG",
  ArEh = "AR_EH",
  ArEr = "AR_ER",
  ArIl = "AR_IL",
  ArIq = "AR_IQ",
  ArJo = "AR_JO",
  ArKm = "AR_KM",
  ArKw = "AR_KW",
  ArLb = "AR_LB",
  ArLy = "AR_LY",
  ArMa = "AR_MA",
  ArMr = "AR_MR",
  ArOm = "AR_OM",
  ArPs = "AR_PS",
  ArQa = "AR_QA",
  ArSa = "AR_SA",
  ArSd = "AR_SD",
  ArSo = "AR_SO",
  ArSs = "AR_SS",
  ArSy = "AR_SY",
  ArTd = "AR_TD",
  ArTn = "AR_TN",
  ArYe = "AR_YE",
  As = "AS",
  Asa = "ASA",
  AsaTz = "ASA_TZ",
  Ast = "AST",
  AstEs = "AST_ES",
  AsIn = "AS_IN",
  Az = "AZ",
  AzCyrl = "AZ_CYRL",
  AzCyrlAz = "AZ_CYRL_AZ",
  AzLatn = "AZ_LATN",
  AzLatnAz = "AZ_LATN_AZ",
  Bas = "BAS",
  BasCm = "BAS_CM",
  Be = "BE",
  Bem = "BEM",
  BemZm = "BEM_ZM",
  Bez = "BEZ",
  BezTz = "BEZ_TZ",
  BeBy = "BE_BY",
  Bg = "BG",
  BgBg = "BG_BG",
  Bm = "BM",
  BmMl = "BM_ML",
  Bn = "BN",
  BnBd = "BN_BD",
  BnIn = "BN_IN",
  Bo = "BO",
  BoCn = "BO_CN",
  BoIn = "BO_IN",
  Br = "BR",
  Brx = "BRX",
  BrxIn = "BRX_IN",
  BrFr = "BR_FR",
  Bs = "BS",
  BsCyrl = "BS_CYRL",
  BsCyrlBa = "BS_CYRL_BA",
  BsLatn = "BS_LATN",
  BsLatnBa = "BS_LATN_BA",
  Ca = "CA",
  CaAd = "CA_AD",
  CaEs = "CA_ES",
  CaEsValencia = "CA_ES_VALENCIA",
  CaFr = "CA_FR",
  CaIt = "CA_IT",
  Ccp = "CCP",
  CcpBd = "CCP_BD",
  CcpIn = "CCP_IN",
  Ce = "CE",
  Ceb = "CEB",
  CebPh = "CEB_PH",
  CeRu = "CE_RU",
  Cgg = "CGG",
  CggUg = "CGG_UG",
  Chr = "CHR",
  ChrUs = "CHR_US",
  Ckb = "CKB",
  CkbIq = "CKB_IQ",
  CkbIr = "CKB_IR",
  Cs = "CS",
  CsCz = "CS_CZ",
  Cu = "CU",
  CuRu = "CU_RU",
  Cy = "CY",
  CyGb = "CY_GB",
  Da = "DA",
  Dav = "DAV",
  DavKe = "DAV_KE",
  DaDk = "DA_DK",
  DaGl = "DA_GL",
  De = "DE",
  DeAt = "DE_AT",
  DeBe = "DE_BE",
  DeCh = "DE_CH",
  DeDe = "DE_DE",
  DeIt = "DE_IT",
  DeLi = "DE_LI",
  DeLu = "DE_LU",
  Dje = "DJE",
  DjeNe = "DJE_NE",
  Dsb = "DSB",
  DsbDe = "DSB_DE",
  Dua = "DUA",
  DuaCm = "DUA_CM",
  Dyo = "DYO",
  DyoSn = "DYO_SN",
  Dz = "DZ",
  DzBt = "DZ_BT",
  Ebu = "EBU",
  EbuKe = "EBU_KE",
  Ee = "EE",
  EeGh = "EE_GH",
  EeTg = "EE_TG",
  El = "EL",
  ElCy = "EL_CY",
  ElGr = "EL_GR",
  En = "EN",
  EnAe = "EN_AE",
  EnAg = "EN_AG",
  EnAi = "EN_AI",
  EnAs = "EN_AS",
  EnAt = "EN_AT",
  EnAu = "EN_AU",
  EnBb = "EN_BB",
  EnBe = "EN_BE",
  EnBi = "EN_BI",
  EnBm = "EN_BM",
  EnBs = "EN_BS",
  EnBw = "EN_BW",
  EnBz = "EN_BZ",
  EnCa = "EN_CA",
  EnCc = "EN_CC",
  EnCh = "EN_CH",
  EnCk = "EN_CK",
  EnCm = "EN_CM",
  EnCx = "EN_CX",
  EnCy = "EN_CY",
  EnDe = "EN_DE",
  EnDg = "EN_DG",
  EnDk = "EN_DK",
  EnDm = "EN_DM",
  EnEr = "EN_ER",
  EnFi = "EN_FI",
  EnFj = "EN_FJ",
  EnFk = "EN_FK",
  EnFm = "EN_FM",
  EnGb = "EN_GB",
  EnGd = "EN_GD",
  EnGg = "EN_GG",
  EnGh = "EN_GH",
  EnGi = "EN_GI",
  EnGm = "EN_GM",
  EnGu = "EN_GU",
  EnGy = "EN_GY",
  EnHk = "EN_HK",
  EnIe = "EN_IE",
  EnIl = "EN_IL",
  EnIm = "EN_IM",
  EnIn = "EN_IN",
  EnIo = "EN_IO",
  EnJe = "EN_JE",
  EnJm = "EN_JM",
  EnKe = "EN_KE",
  EnKi = "EN_KI",
  EnKn = "EN_KN",
  EnKy = "EN_KY",
  EnLc = "EN_LC",
  EnLr = "EN_LR",
  EnLs = "EN_LS",
  EnMg = "EN_MG",
  EnMh = "EN_MH",
  EnMo = "EN_MO",
  EnMp = "EN_MP",
  EnMs = "EN_MS",
  EnMt = "EN_MT",
  EnMu = "EN_MU",
  EnMw = "EN_MW",
  EnMy = "EN_MY",
  EnNa = "EN_NA",
  EnNf = "EN_NF",
  EnNg = "EN_NG",
  EnNl = "EN_NL",
  EnNr = "EN_NR",
  EnNu = "EN_NU",
  EnNz = "EN_NZ",
  EnPg = "EN_PG",
  EnPh = "EN_PH",
  EnPk = "EN_PK",
  EnPn = "EN_PN",
  EnPr = "EN_PR",
  EnPw = "EN_PW",
  EnRw = "EN_RW",
  EnSb = "EN_SB",
  EnSc = "EN_SC",
  EnSd = "EN_SD",
  EnSe = "EN_SE",
  EnSg = "EN_SG",
  EnSh = "EN_SH",
  EnSi = "EN_SI",
  EnSl = "EN_SL",
  EnSs = "EN_SS",
  EnSx = "EN_SX",
  EnSz = "EN_SZ",
  EnTc = "EN_TC",
  EnTk = "EN_TK",
  EnTo = "EN_TO",
  EnTt = "EN_TT",
  EnTv = "EN_TV",
  EnTz = "EN_TZ",
  EnUg = "EN_UG",
  EnUm = "EN_UM",
  EnUs = "EN_US",
  EnVc = "EN_VC",
  EnVg = "EN_VG",
  EnVi = "EN_VI",
  EnVu = "EN_VU",
  EnWs = "EN_WS",
  EnZa = "EN_ZA",
  EnZm = "EN_ZM",
  EnZw = "EN_ZW",
  Eo = "EO",
  Es = "ES",
  EsAr = "ES_AR",
  EsBo = "ES_BO",
  EsBr = "ES_BR",
  EsBz = "ES_BZ",
  EsCl = "ES_CL",
  EsCo = "ES_CO",
  EsCr = "ES_CR",
  EsCu = "ES_CU",
  EsDo = "ES_DO",
  EsEa = "ES_EA",
  EsEc = "ES_EC",
  EsEs = "ES_ES",
  EsGq = "ES_GQ",
  EsGt = "ES_GT",
  EsHn = "ES_HN",
  EsIc = "ES_IC",
  EsMx = "ES_MX",
  EsNi = "ES_NI",
  EsPa = "ES_PA",
  EsPe = "ES_PE",
  EsPh = "ES_PH",
  EsPr = "ES_PR",
  EsPy = "ES_PY",
  EsSv = "ES_SV",
  EsUs = "ES_US",
  EsUy = "ES_UY",
  EsVe = "ES_VE",
  Et = "ET",
  EtEe = "ET_EE",
  Eu = "EU",
  EuEs = "EU_ES",
  Ewo = "EWO",
  EwoCm = "EWO_CM",
  Fa = "FA",
  FaAf = "FA_AF",
  FaIr = "FA_IR",
  Ff = "FF",
  FfAdlm = "FF_ADLM",
  FfAdlmBf = "FF_ADLM_BF",
  FfAdlmCm = "FF_ADLM_CM",
  FfAdlmGh = "FF_ADLM_GH",
  FfAdlmGm = "FF_ADLM_GM",
  FfAdlmGn = "FF_ADLM_GN",
  FfAdlmGw = "FF_ADLM_GW",
  FfAdlmLr = "FF_ADLM_LR",
  FfAdlmMr = "FF_ADLM_MR",
  FfAdlmNe = "FF_ADLM_NE",
  FfAdlmNg = "FF_ADLM_NG",
  FfAdlmSl = "FF_ADLM_SL",
  FfAdlmSn = "FF_ADLM_SN",
  FfLatn = "FF_LATN",
  FfLatnBf = "FF_LATN_BF",
  FfLatnCm = "FF_LATN_CM",
  FfLatnGh = "FF_LATN_GH",
  FfLatnGm = "FF_LATN_GM",
  FfLatnGn = "FF_LATN_GN",
  FfLatnGw = "FF_LATN_GW",
  FfLatnLr = "FF_LATN_LR",
  FfLatnMr = "FF_LATN_MR",
  FfLatnNe = "FF_LATN_NE",
  FfLatnNg = "FF_LATN_NG",
  FfLatnSl = "FF_LATN_SL",
  FfLatnSn = "FF_LATN_SN",
  Fi = "FI",
  Fil = "FIL",
  FilPh = "FIL_PH",
  FiFi = "FI_FI",
  Fo = "FO",
  FoDk = "FO_DK",
  FoFo = "FO_FO",
  Fr = "FR",
  FrBe = "FR_BE",
  FrBf = "FR_BF",
  FrBi = "FR_BI",
  FrBj = "FR_BJ",
  FrBl = "FR_BL",
  FrCa = "FR_CA",
  FrCd = "FR_CD",
  FrCf = "FR_CF",
  FrCg = "FR_CG",
  FrCh = "FR_CH",
  FrCi = "FR_CI",
  FrCm = "FR_CM",
  FrDj = "FR_DJ",
  FrDz = "FR_DZ",
  FrFr = "FR_FR",
  FrGa = "FR_GA",
  FrGf = "FR_GF",
  FrGn = "FR_GN",
  FrGp = "FR_GP",
  FrGq = "FR_GQ",
  FrHt = "FR_HT",
  FrKm = "FR_KM",
  FrLu = "FR_LU",
  FrMa = "FR_MA",
  FrMc = "FR_MC",
  FrMf = "FR_MF",
  FrMg = "FR_MG",
  FrMl = "FR_ML",
  FrMq = "FR_MQ",
  FrMr = "FR_MR",
  FrMu = "FR_MU",
  FrNc = "FR_NC",
  FrNe = "FR_NE",
  FrPf = "FR_PF",
  FrPm = "FR_PM",
  FrRe = "FR_RE",
  FrRw = "FR_RW",
  FrSc = "FR_SC",
  FrSn = "FR_SN",
  FrSy = "FR_SY",
  FrTd = "FR_TD",
  FrTg = "FR_TG",
  FrTn = "FR_TN",
  FrVu = "FR_VU",
  FrWf = "FR_WF",
  FrYt = "FR_YT",
  Fur = "FUR",
  FurIt = "FUR_IT",
  Fy = "FY",
  FyNl = "FY_NL",
  Ga = "GA",
  GaGb = "GA_GB",
  GaIe = "GA_IE",
  Gd = "GD",
  GdGb = "GD_GB",
  Gl = "GL",
  GlEs = "GL_ES",
  Gsw = "GSW",
  GswCh = "GSW_CH",
  GswFr = "GSW_FR",
  GswLi = "GSW_LI",
  Gu = "GU",
  Guz = "GUZ",
  GuzKe = "GUZ_KE",
  GuIn = "GU_IN",
  Gv = "GV",
  GvIm = "GV_IM",
  Ha = "HA",
  Haw = "HAW",
  HawUs = "HAW_US",
  HaGh = "HA_GH",
  HaNe = "HA_NE",
  HaNg = "HA_NG",
  He = "HE",
  HeIl = "HE_IL",
  Hi = "HI",
  HiIn = "HI_IN",
  Hr = "HR",
  HrBa = "HR_BA",
  HrHr = "HR_HR",
  Hsb = "HSB",
  HsbDe = "HSB_DE",
  Hu = "HU",
  HuHu = "HU_HU",
  Hy = "HY",
  HyAm = "HY_AM",
  Ia = "IA",
  Id = "ID",
  IdId = "ID_ID",
  Ig = "IG",
  IgNg = "IG_NG",
  Ii = "II",
  IiCn = "II_CN",
  Is = "IS",
  IsIs = "IS_IS",
  It = "IT",
  ItCh = "IT_CH",
  ItIt = "IT_IT",
  ItSm = "IT_SM",
  ItVa = "IT_VA",
  Ja = "JA",
  JaJp = "JA_JP",
  Jgo = "JGO",
  JgoCm = "JGO_CM",
  Jmc = "JMC",
  JmcTz = "JMC_TZ",
  Jv = "JV",
  JvId = "JV_ID",
  Ka = "KA",
  Kab = "KAB",
  KabDz = "KAB_DZ",
  Kam = "KAM",
  KamKe = "KAM_KE",
  KaGe = "KA_GE",
  Kde = "KDE",
  KdeTz = "KDE_TZ",
  Kea = "KEA",
  KeaCv = "KEA_CV",
  Khq = "KHQ",
  KhqMl = "KHQ_ML",
  Ki = "KI",
  KiKe = "KI_KE",
  Kk = "KK",
  Kkj = "KKJ",
  KkjCm = "KKJ_CM",
  KkKz = "KK_KZ",
  Kl = "KL",
  Kln = "KLN",
  KlnKe = "KLN_KE",
  KlGl = "KL_GL",
  Km = "KM",
  KmKh = "KM_KH",
  Kn = "KN",
  KnIn = "KN_IN",
  Ko = "KO",
  Kok = "KOK",
  KokIn = "KOK_IN",
  KoKp = "KO_KP",
  KoKr = "KO_KR",
  Ks = "KS",
  Ksb = "KSB",
  KsbTz = "KSB_TZ",
  Ksf = "KSF",
  KsfCm = "KSF_CM",
  Ksh = "KSH",
  KshDe = "KSH_DE",
  KsArab = "KS_ARAB",
  KsArabIn = "KS_ARAB_IN",
  Ku = "KU",
  KuTr = "KU_TR",
  Kw = "KW",
  KwGb = "KW_GB",
  Ky = "KY",
  KyKg = "KY_KG",
  Lag = "LAG",
  LagTz = "LAG_TZ",
  Lb = "LB",
  LbLu = "LB_LU",
  Lg = "LG",
  LgUg = "LG_UG",
  Lkt = "LKT",
  LktUs = "LKT_US",
  Ln = "LN",
  LnAo = "LN_AO",
  LnCd = "LN_CD",
  LnCf = "LN_CF",
  LnCg = "LN_CG",
  Lo = "LO",
  LoLa = "LO_LA",
  Lrc = "LRC",
  LrcIq = "LRC_IQ",
  LrcIr = "LRC_IR",
  Lt = "LT",
  LtLt = "LT_LT",
  Lu = "LU",
  Luo = "LUO",
  LuoKe = "LUO_KE",
  Luy = "LUY",
  LuyKe = "LUY_KE",
  LuCd = "LU_CD",
  Lv = "LV",
  LvLv = "LV_LV",
  Mai = "MAI",
  MaiIn = "MAI_IN",
  Mas = "MAS",
  MasKe = "MAS_KE",
  MasTz = "MAS_TZ",
  Mer = "MER",
  MerKe = "MER_KE",
  Mfe = "MFE",
  MfeMu = "MFE_MU",
  Mg = "MG",
  Mgh = "MGH",
  MghMz = "MGH_MZ",
  Mgo = "MGO",
  MgoCm = "MGO_CM",
  MgMg = "MG_MG",
  Mi = "MI",
  MiNz = "MI_NZ",
  Mk = "MK",
  MkMk = "MK_MK",
  Ml = "ML",
  MlIn = "ML_IN",
  Mn = "MN",
  Mni = "MNI",
  MniBeng = "MNI_BENG",
  MniBengIn = "MNI_BENG_IN",
  MnMn = "MN_MN",
  Mr = "MR",
  MrIn = "MR_IN",
  Ms = "MS",
  MsBn = "MS_BN",
  MsId = "MS_ID",
  MsMy = "MS_MY",
  MsSg = "MS_SG",
  Mt = "MT",
  MtMt = "MT_MT",
  Mua = "MUA",
  MuaCm = "MUA_CM",
  My = "MY",
  MyMm = "MY_MM",
  Mzn = "MZN",
  MznIr = "MZN_IR",
  Naq = "NAQ",
  NaqNa = "NAQ_NA",
  Nb = "NB",
  NbNo = "NB_NO",
  NbSj = "NB_SJ",
  Nd = "ND",
  Nds = "NDS",
  NdsDe = "NDS_DE",
  NdsNl = "NDS_NL",
  NdZw = "ND_ZW",
  Ne = "NE",
  NeIn = "NE_IN",
  NeNp = "NE_NP",
  Nl = "NL",
  NlAw = "NL_AW",
  NlBe = "NL_BE",
  NlBq = "NL_BQ",
  NlCw = "NL_CW",
  NlNl = "NL_NL",
  NlSr = "NL_SR",
  NlSx = "NL_SX",
  Nmg = "NMG",
  NmgCm = "NMG_CM",
  Nn = "NN",
  Nnh = "NNH",
  NnhCm = "NNH_CM",
  NnNo = "NN_NO",
  Nus = "NUS",
  NusSs = "NUS_SS",
  Nyn = "NYN",
  NynUg = "NYN_UG",
  Om = "OM",
  OmEt = "OM_ET",
  OmKe = "OM_KE",
  Or = "OR",
  OrIn = "OR_IN",
  Os = "OS",
  OsGe = "OS_GE",
  OsRu = "OS_RU",
  Pa = "PA",
  PaArab = "PA_ARAB",
  PaArabPk = "PA_ARAB_PK",
  PaGuru = "PA_GURU",
  PaGuruIn = "PA_GURU_IN",
  Pcm = "PCM",
  PcmNg = "PCM_NG",
  Pl = "PL",
  PlPl = "PL_PL",
  Prg = "PRG",
  Ps = "PS",
  PsAf = "PS_AF",
  PsPk = "PS_PK",
  Pt = "PT",
  PtAo = "PT_AO",
  PtBr = "PT_BR",
  PtCh = "PT_CH",
  PtCv = "PT_CV",
  PtGq = "PT_GQ",
  PtGw = "PT_GW",
  PtLu = "PT_LU",
  PtMo = "PT_MO",
  PtMz = "PT_MZ",
  PtPt = "PT_PT",
  PtSt = "PT_ST",
  PtTl = "PT_TL",
  Qu = "QU",
  QuBo = "QU_BO",
  QuEc = "QU_EC",
  QuPe = "QU_PE",
  Rm = "RM",
  RmCh = "RM_CH",
  Rn = "RN",
  RnBi = "RN_BI",
  Ro = "RO",
  Rof = "ROF",
  RofTz = "ROF_TZ",
  RoMd = "RO_MD",
  RoRo = "RO_RO",
  Ru = "RU",
  RuBy = "RU_BY",
  RuKg = "RU_KG",
  RuKz = "RU_KZ",
  RuMd = "RU_MD",
  RuRu = "RU_RU",
  RuUa = "RU_UA",
  Rw = "RW",
  Rwk = "RWK",
  RwkTz = "RWK_TZ",
  RwRw = "RW_RW",
  Sah = "SAH",
  SahRu = "SAH_RU",
  Saq = "SAQ",
  SaqKe = "SAQ_KE",
  Sat = "SAT",
  SatOlck = "SAT_OLCK",
  SatOlckIn = "SAT_OLCK_IN",
  Sbp = "SBP",
  SbpTz = "SBP_TZ",
  Sd = "SD",
  SdArab = "SD_ARAB",
  SdArabPk = "SD_ARAB_PK",
  SdDeva = "SD_DEVA",
  SdDevaIn = "SD_DEVA_IN",
  Se = "SE",
  Seh = "SEH",
  SehMz = "SEH_MZ",
  Ses = "SES",
  SesMl = "SES_ML",
  SeFi = "SE_FI",
  SeNo = "SE_NO",
  SeSe = "SE_SE",
  Sg = "SG",
  SgCf = "SG_CF",
  Shi = "SHI",
  ShiLatn = "SHI_LATN",
  ShiLatnMa = "SHI_LATN_MA",
  ShiTfng = "SHI_TFNG",
  ShiTfngMa = "SHI_TFNG_MA",
  Si = "SI",
  SiLk = "SI_LK",
  Sk = "SK",
  SkSk = "SK_SK",
  Sl = "SL",
  SlSi = "SL_SI",
  Smn = "SMN",
  SmnFi = "SMN_FI",
  Sn = "SN",
  SnZw = "SN_ZW",
  So = "SO",
  SoDj = "SO_DJ",
  SoEt = "SO_ET",
  SoKe = "SO_KE",
  SoSo = "SO_SO",
  Sq = "SQ",
  SqAl = "SQ_AL",
  SqMk = "SQ_MK",
  SqXk = "SQ_XK",
  Sr = "SR",
  SrCyrl = "SR_CYRL",
  SrCyrlBa = "SR_CYRL_BA",
  SrCyrlMe = "SR_CYRL_ME",
  SrCyrlRs = "SR_CYRL_RS",
  SrCyrlXk = "SR_CYRL_XK",
  SrLatn = "SR_LATN",
  SrLatnBa = "SR_LATN_BA",
  SrLatnMe = "SR_LATN_ME",
  SrLatnRs = "SR_LATN_RS",
  SrLatnXk = "SR_LATN_XK",
  Su = "SU",
  SuLatn = "SU_LATN",
  SuLatnId = "SU_LATN_ID",
  Sv = "SV",
  SvAx = "SV_AX",
  SvFi = "SV_FI",
  SvSe = "SV_SE",
  Sw = "SW",
  SwCd = "SW_CD",
  SwKe = "SW_KE",
  SwTz = "SW_TZ",
  SwUg = "SW_UG",
  Ta = "TA",
  TaIn = "TA_IN",
  TaLk = "TA_LK",
  TaMy = "TA_MY",
  TaSg = "TA_SG",
  Te = "TE",
  Teo = "TEO",
  TeoKe = "TEO_KE",
  TeoUg = "TEO_UG",
  TeIn = "TE_IN",
  Tg = "TG",
  TgTj = "TG_TJ",
  Th = "TH",
  ThTh = "TH_TH",
  Ti = "TI",
  TiEr = "TI_ER",
  TiEt = "TI_ET",
  Tk = "TK",
  TkTm = "TK_TM",
  To = "TO",
  ToTo = "TO_TO",
  Tr = "TR",
  TrCy = "TR_CY",
  TrTr = "TR_TR",
  Tt = "TT",
  TtRu = "TT_RU",
  Twq = "TWQ",
  TwqNe = "TWQ_NE",
  Tzm = "TZM",
  TzmMa = "TZM_MA",
  Ug = "UG",
  UgCn = "UG_CN",
  Uk = "UK",
  UkUa = "UK_UA",
  Ur = "UR",
  UrIn = "UR_IN",
  UrPk = "UR_PK",
  Uz = "UZ",
  UzArab = "UZ_ARAB",
  UzArabAf = "UZ_ARAB_AF",
  UzCyrl = "UZ_CYRL",
  UzCyrlUz = "UZ_CYRL_UZ",
  UzLatn = "UZ_LATN",
  UzLatnUz = "UZ_LATN_UZ",
  Vai = "VAI",
  VaiLatn = "VAI_LATN",
  VaiLatnLr = "VAI_LATN_LR",
  VaiVaii = "VAI_VAII",
  VaiVaiiLr = "VAI_VAII_LR",
  Vi = "VI",
  ViVn = "VI_VN",
  Vo = "VO",
  Vun = "VUN",
  VunTz = "VUN_TZ",
  Wae = "WAE",
  WaeCh = "WAE_CH",
  Wo = "WO",
  WoSn = "WO_SN",
  Xh = "XH",
  XhZa = "XH_ZA",
  Xog = "XOG",
  XogUg = "XOG_UG",
  Yav = "YAV",
  YavCm = "YAV_CM",
  Yi = "YI",
  Yo = "YO",
  YoBj = "YO_BJ",
  YoNg = "YO_NG",
  Yue = "YUE",
  YueHans = "YUE_HANS",
  YueHansCn = "YUE_HANS_CN",
  YueHant = "YUE_HANT",
  YueHantHk = "YUE_HANT_HK",
  Zgh = "ZGH",
  ZghMa = "ZGH_MA",
  Zh = "ZH",
  ZhHans = "ZH_HANS",
  ZhHansCn = "ZH_HANS_CN",
  ZhHansHk = "ZH_HANS_HK",
  ZhHansMo = "ZH_HANS_MO",
  ZhHansSg = "ZH_HANS_SG",
  ZhHant = "ZH_HANT",
  ZhHantHk = "ZH_HANT_HK",
  ZhHantMo = "ZH_HANT_MO",
  ZhHantTw = "ZH_HANT_TW",
  Zu = "ZU",
  ZuZa = "ZU_ZA",
}
export type AddressInput = {
  /** City. */
  city?: InputMaybe<Scalars["String"]>;
  /** District. */
  cityArea?: InputMaybe<Scalars["String"]>;
  /** Company or organization. */
  companyName?: InputMaybe<Scalars["String"]>;
  /** Country. */
  country?: InputMaybe<CountryCode>;
  /** State or province. */
  countryArea?: InputMaybe<Scalars["String"]>;
  /** Given name. */
  firstName?: InputMaybe<Scalars["String"]>;
  /** Family name. */
  lastName?: InputMaybe<Scalars["String"]>;
  /** Phone number. */
  phone?: InputMaybe<Scalars["String"]>;
  /** Postal code. */
  postalCode?: InputMaybe<Scalars["String"]>;
  /** Address. */
  streetAddress1?: InputMaybe<Scalars["String"]>;
  /** Address. */
  streetAddress2?: InputMaybe<Scalars["String"]>;
};

export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
// exact type: object must have the same type and attribute name

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: string;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: string;
  /** The `Day` scalar type represents number of days by integer value. */
  Day: unknown;
  /**
   * Custom Decimal implementation.
   *
   * Returns Decimal as a float in the API,
   * parses float to the Decimal on the way back.
   */
  Decimal: number;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: unknown;
  JSON: unknown;
  JSONString: string;
  /**
   * Metadata is a map of key-value pairs, both keys and values are `String`.
   *
   * Example:
   * ```
   * {
   *     "key1": "value1",
   *     "key2": "value2"
   * }
   * ```
   */
  Metadata: Record<string, string>;
  /** The `Minute` scalar type represents number of minutes by integer value. */
  Minute: unknown;
  /**
   * Nonnegative Decimal scalar implementation.
   *
   * Should be used in places where value must be nonnegative (0 or greater).
   */
  PositiveDecimal: number;
  UUID: string;
  /** Variables of this type must be set to null in mutations. They will be replaced with a filename from a following multipart part containing a binary file. See: https://github.com/jaydenseric/graphql-multipart-request-spec. */
  Upload: unknown;
  WeightScalar: number;
  /** _Any value scalar as defined by Federation spec. */
  _Any: unknown;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

  constructor(private value: string, public __meta__?: { hash: string }) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

//MENU
export type GetMenuBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export enum OrderDirection {
  /** Specifies an ascending sort order. */
  Asc = "ASC",
  /** Specifies a descending sort order. */
  Desc = "DESC",
}
//MENU
export type GetMenuBySlugQuery = {
  menu?: {
    id: string;
    slug: string;
    name: string;
    items?: Array<{
      id: string;
      name: string;
      url?: string | null;
      children?: Array<{
        id: string;
        name: string;
        url?: string | null;
        children?: Array<{
          id: string;
          name: string;
          url?: string | null;
          children?: Array<{
            id: string;
            name: string;
            url?: string | null;
            collection?: {
              slug: string;
              products?: { totalCount?: number | null } | null;
            } | null;
            category?: {
              slug: string;
              products?: { totalCount?: number | null } | null;
            } | null;
            page?: { slug: string } | null;
          }> | null;
          collection?: {
            slug: string;
            products?: { totalCount?: number | null } | null;
          } | null;
          category?: {
            slug: string;
            products?: { totalCount?: number | null } | null;
          } | null;
          page?: { slug: string } | null;
        }> | null;
        collection?: {
          slug: string;
          products?: { totalCount?: number | null } | null;
        } | null;
        category?: {
          slug: string;
          products?: { totalCount?: number | null } | null;
        } | null;
        page?: { slug: string } | null;
      }> | null;
      collection?: {
        slug: string;
        products?: { totalCount?: number | null } | null;
      } | null;
      category?: {
        slug: string;
        products?: { totalCount?: number | null } | null;
      } | null;
      page?: { slug: string } | null;
    }> | null;
  } | null;
};
export const GetMenuBySlugDocument = new TypedDocumentString(`
    query GetMenuBySlug($slug: String!) {
  menu(slug: $slug, channel: "default-channel") {
    id
    slug
    name
    items {
      ...MenuItem
      children {
        ...MenuItem
        children {
          ...MenuItem
          children {
            ...MenuItem
          }
        }
      }
    }
  }
}
    fragment MenuItem on MenuItem {
  id
  name
  url
  collection {
    slug
    products(first: 0) {
      totalCount
    }
  }
  category {
    slug
    products(channel: "default-channel", first: 0) {
      totalCount
    }
  }
  page {
    slug
  }
}`) as unknown as TypedDocumentString<
  GetMenuBySlugQuery,
  GetMenuBySlugQueryVariables
>;
export type MenuItemFragment = {
  id: string;
  name: string;
  url?: string | null;
  collection?: {
    slug: string;
    products?: { totalCount?: number | null } | null;
  } | null;
  category?: {
    slug: string;
    products?: { totalCount?: number | null } | null;
  } | null;
  page?: { slug: string } | null;
};
export enum ProductOrderField {
  Group = "GROUP",
  CreatedAt = "CREATED_AT",
  Date = "DATE",
  LastModified = "LAST_MODIFIED",
  LastModifiedAt = "LAST_MODIFIED_AT",
  MinimalPrice = "MINIMAL_PRICE",

  Name = "NAME",
  /**
   * Sort products by price.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  Price = "PRICE",
  /** Sort products by rating. */
  Rating = "RATING",
  /** Sort products by type. */
  Type = "TYPE",
}
//CATALOGUE
//CATEGORY
export type GetCategoryProductsBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
  sortBy: ProductOrderField;
  sortDirection: OrderDirection;
}>;

export type GetCategoryProductsBySlugQuery = {
  category?: {
    products?: {
      edges: Array<{
        node: {
          id: string;
          slug: string;
          name: string;
          isAvailableForPurchase?: boolean | null;
          description?: string | null;
          seoTitle?: string | null;
          seoDescription?: string | null;
          updatedAt: string;
          pricing?: {
            priceRange?: {
              start?: { gross: { currency: string; amount: number } } | null;
              stop?: { gross: { currency: string; amount: number } } | null;
            } | null;
          } | null;
          media?: Array<{
            url: string;
            type: ProductMediaType;
            alt: string;
          }> | null;
          collections?: Array<{ name: string }> | null;
          variants?: Array<{
            id: string;
            name: string;
            attributes: Array<{
              attribute: {
                slug?: string | null;
                name?: string | null;
                choices?: {
                  edges: Array<{ node: { name?: string | null } }>;
                } | null;
              };
              values: Array<{ name?: string | null }>;
            }>;
            pricing?: {
              price?: { gross: { currency: string; amount: number } } | null;
            } | null;
          }> | null;
        };
      }>;
    } | null;
  } | null;
};
export const GetCategoryProductsBySlugDocument = new TypedDocumentString(`
    query GetCategoryProductsBySlug($slug: String!, $sortBy: ProductOrderField!, $sortDirection: OrderDirection!) {
  category(slug: $slug) {
    products(
      channel: "default-channel"
      first: 100
      sortBy: {field: $sortBy, direction: $sortDirection}
    ) {
      edges {
        node {
          id
          slug
          name
          isAvailableForPurchase
          description
          seoTitle
          seoDescription
          pricing {
            priceRange {
              start {
                gross {
                  currency
                  amount
                }
              }
              stop {
                gross {
                  currency
                  amount
                }
              }
            }
          }
          media {
            url(size: 2160)
            type
            alt
          }
          collections {
            name
          }
          updatedAt
          variants {
            ...Variant
          }
        }
      }
    }
  }
}
    fragment Variant on ProductVariant {
  id
  name
  attributes {
    attribute {
      slug
      name
      choices(first: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
    values {
      name
    }
  }
  pricing {
    price {
      gross {
        currency
        amount
      }
    }
  }
}`) as unknown as TypedDocumentString<
  GetCategoryProductsBySlugQuery,
  GetCategoryProductsBySlugQueryVariables
>;

//COLLECTION
export type CheckoutAddressValidationRules = {
  /** Determines if an error should be raised when the provided address doesn't match the expected format. Example: using letters for postal code when the numbers are expected. */
  checkFieldsFormat?: InputMaybe<Scalars["Boolean"]>;
  /** Determines if an error should be raised when the provided address doesn't have all the required fields. The list of required fields is dynamic and depends on the country code (use the `addressValidationRules` query to fetch them). Note: country code is mandatory for all addresses regardless of the rules provided in this input. */
  checkRequiredFields?: InputMaybe<Scalars["Boolean"]>;
  /** Determines if Saleor should apply normalization on address fields. Example: converting city field to uppercase letters. */
  enableFieldsNormalization?: InputMaybe<Scalars["Boolean"]>;
};

export type CheckoutValidationRules = {
  /** The validation rules that can be applied to provided billing address data. */
  billingAddress?: InputMaybe<CheckoutAddressValidationRules>;
  /** The validation rules that can be applied to provided shipping address data. */
  shippingAddress?: InputMaybe<CheckoutAddressValidationRules>;
};
//VARIANTS

export type VariantFragment = {
  id: string;
  name: string;
  attributes: Array<{
    attribute: {
      slug?: string | null;
      name?: string | null;
      choices?: { edges: Array<{ node: { name?: string | null } }> } | null;
    };
    values: Array<{ name?: string | null }>;
  }>;
  pricing?: {
    price?: { gross: { currency: string; amount: number } } | null;
  } | null;
};

//Products
export type GetProductBySlugQuery = {
  product?: {
    id: string;
    slug: string;
    name: string;
    isAvailableForPurchase?: boolean | null;
    description?: string | null;
    seoTitle?: string | null;
    seoDescription?: string | null;
    updatedAt: string;
    pricing?: {
      priceRange?: {
        start?: { gross: { currency: string; amount: number } } | null;
        stop?: { gross: { currency: string; amount: number } } | null;
      } | null;
    } | null;
    media?: Array<{ url: string; type: ProductMediaType; alt: string }> | null;
    collections?: Array<{ name: string }> | null;
    variants?: Array<{
      id: string;
      name: string;
      attributes: Array<{
        attribute: {
          slug?: string | null;
          name?: string | null;
          choices?: { edges: Array<{ node: { name?: string | null } }> } | null;
        };
        values: Array<{ name?: string | null }>;
      }>;
      pricing?: {
        price?: { gross: { currency: string; amount: number } } | null;
      } | null;
    }> | null;
  } | null;
};
export type GetProductBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export const GetProductBySlugDocument = new TypedDocumentString(`
    query GetProductBySlug($slug: String!) {
  product(channel: "default-channel", slug: $slug) {
    ...ProductDetails
  }
}
    fragment ProductDetails on Product {
  id
  slug
  name
  isAvailableForPurchase
  description
  seoTitle
  seoDescription
  pricing {
    priceRange {
      start {
        gross {
          currency
          amount
        }
      }
      stop {
        gross {
          currency
          amount
        }
      }
    }
  }
  media {
    url(size: 1080)
    type
    alt
  }
  collections {
    name
  }
  updatedAt
  variants {
    ...Variant
  }
}
fragment Variant on ProductVariant {
  id
  name
  attributes {
    attribute {
      slug
      name
      choices(first: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
    values {
      name
    }
  }
  pricing {
    price {
      gross {
        currency
        amount
      }
    }
  }
}`) as unknown as TypedDocumentString<
  GetProductBySlugQuery,
  GetProductBySlugQueryVariables
>;

export const SearchProductsDocument = new TypedDocumentString(`
    query SearchProducts($search: String!, $sortBy: ProductOrderField!, $sortDirection: OrderDirection!) {
  products(
    first: 100
    channel: "default-channel"
    sortBy: {field: $sortBy, direction: $sortDirection}
    filter: {search: $search}
  ) {
    edges {
      node {
        id
        slug
        name
        isAvailableForPurchase
        description
        seoTitle
        seoDescription
        pricing {
          priceRange {
            start {
              gross {
                currency
                amount
              }
            }
            stop {
              gross {
                currency
                amount
              }
            }
          }
        }
        media {
          url(size: 2160)
          type
          alt
        }
        collections {
          name
        }
        updatedAt
        variants {
          ...Variant
        }
      }
    }
  }
}
    fragment Variant on ProductVariant {
  id
  name
  attributes {
    attribute {
      slug
      name
      choices(first: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
    values {
      name
    }
  }
  pricing {
    price {
      gross {
        currency
        amount
      }
    }
  }
}`) as unknown as TypedDocumentString<
  SearchProductsQuery,
  SearchProductsQueryVariables
>;
export type SearchProductsQueryVariables = Exact<{
  search: Scalars["String"];
  sortBy: ProductOrderField;
  sortDirection: OrderDirection;
}>;

export type SearchProductsQuery = {
  products?: {
    edges: Array<{
      node: {
        id: string;
        slug: string;
        name: string;
        isAvailableForPurchase?: boolean | null;
        description?: string | null;
        seoTitle?: string | null;
        seoDescription?: string | null;
        updatedAt: string;
        pricing?: {
          priceRange?: {
            start?: { gross: { currency: string; amount: number } } | null;
            stop?: { gross: { currency: string; amount: number } } | null;
          } | null;
        } | null;
        media?: Array<{
          url: string;
          type: ProductMediaType;
          alt: string;
        }> | null;
        collections?: Array<{ name: string }> | null;
        variants?: Array<{
          id: string;
          name: string;
          attributes: Array<{
            attribute: {
              slug?: string | null;
              name?: string | null;
              choices?: {
                edges: Array<{ node: { name?: string | null } }>;
              } | null;
            };
            values: Array<{ name?: string | null }>;
          }>;
          pricing?: {
            price?: { gross: { currency: string; amount: number } } | null;
          } | null;
        }> | null;
      };
    }>;
  } | null;
};
//Cart
export type GetCheckoutByIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetCheckoutByIdQuery = {
  checkout?: {
    id: string;
    quantity: number;
    totalPrice: {
      gross: { currency: string; amount: number };
      tax: { currency: string; amount: number };
    };
    subtotalPrice: { gross: { currency: string; amount: number } };
    lines: Array<{
      id: string;
      quantity: number;
      variant: {
        id: string;
        name: string;
        product: {
          id: string;
          slug: string;
          name: string;
          isAvailableForPurchase?: boolean | null;
          description?: string | null;
          seoTitle?: string | null;
          seoDescription?: string | null;
          updatedAt: string;
          pricing?: {
            priceRange?: {
              start?: { gross: { currency: string; amount: number } } | null;
              stop?: { gross: { currency: string; amount: number } } | null;
            } | null;
          } | null;
          media?: Array<{
            url: string;
            type: ProductMediaType;
            alt: string;
          }> | null;
          collections?: Array<{ name: string }> | null;
          variants?: Array<{
            id: string;
            name: string;
            attributes: Array<{
              attribute: {
                slug?: string | null;
                name?: string | null;
                choices?: {
                  edges: Array<{ node: { name?: string | null } }>;
                } | null;
              };
              values: Array<{ name?: string | null }>;
            }>;
            pricing?: {
              price?: { gross: { currency: string; amount: number } } | null;
            } | null;
          }> | null;
        };
        attributes: Array<{
          attribute: {
            slug?: string | null;
            name?: string | null;
            choices?: {
              edges: Array<{ node: { name?: string | null } }>;
            } | null;
          };
          values: Array<{ name?: string | null }>;
        }>;
        pricing?: {
          price?: { gross: { currency: string; amount: number } } | null;
        } | null;
      };
    }>;
  } | null;
};

export const GetCheckoutByIdDocument = new TypedDocumentString(`
    query GetCheckoutById($id: ID!) {
  checkout(id: $id) {
    ...Checkout
  }
}
    fragment Checkout on Checkout {
  id
  totalPrice {
    gross {
      currency
      amount
    }
    tax {
      currency
      amount
    }
  }
  subtotalPrice {
    gross {
      currency
      amount
    }
  }
  quantity
  lines {
    id
    quantity
    variant {
      ...Variant
      product {
        ...ProductDetails
      }
    }
  }
}
fragment ProductDetails on Product {
  id
  slug
  name
  isAvailableForPurchase
  description
  seoTitle
  seoDescription
  pricing {
    priceRange {
      start {
        gross {
          currency
          amount
        }
      }
      stop {
        gross {
          currency
          amount
        }
      }
    }
  }
  media {
    url(size: 1080)
    type
    alt
  }
  collections {
    name
  }
  updatedAt
  variants {
    ...Variant
  }
}
fragment Variant on ProductVariant {
  id
  name
  attributes {
    attribute {
      slug
      name
      choices(first: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
    values {
      name
    }
  }
  pricing {
    price {
      gross {
        currency
        amount
      }
    }
  }
}`) as unknown as TypedDocumentString<
  GetCheckoutByIdQuery,
  GetCheckoutByIdQueryVariables
>;

//CHECKOUT
/** An enumeration. */
export enum CheckoutErrorCode {
  BillingAddressNotSet = "BILLING_ADDRESS_NOT_SET",
  ChannelInactive = "CHANNEL_INACTIVE",
  CheckoutNotFullyPaid = "CHECKOUT_NOT_FULLY_PAID",
  DeliveryMethodNotApplicable = "DELIVERY_METHOD_NOT_APPLICABLE",
  EmailNotSet = "EMAIL_NOT_SET",
  GiftCardNotApplicable = "GIFT_CARD_NOT_APPLICABLE",
  GraphqlError = "GRAPHQL_ERROR",
  InactivePayment = "INACTIVE_PAYMENT",
  InsufficientStock = "INSUFFICIENT_STOCK",
  Invalid = "INVALID",
  InvalidShippingMethod = "INVALID_SHIPPING_METHOD",
  MissingChannelSlug = "MISSING_CHANNEL_SLUG",
  NotFound = "NOT_FOUND",
  NoLines = "NO_LINES",
  PaymentError = "PAYMENT_ERROR",
  ProductNotPublished = "PRODUCT_NOT_PUBLISHED",
  ProductUnavailableForPurchase = "PRODUCT_UNAVAILABLE_FOR_PURCHASE",
  QuantityGreaterThanLimit = "QUANTITY_GREATER_THAN_LIMIT",
  Required = "REQUIRED",
  ShippingAddressNotSet = "SHIPPING_ADDRESS_NOT_SET",
  ShippingMethodNotApplicable = "SHIPPING_METHOD_NOT_APPLICABLE",
  ShippingMethodNotSet = "SHIPPING_METHOD_NOT_SET",
  ShippingNotRequired = "SHIPPING_NOT_REQUIRED",
  TaxError = "TAX_ERROR",
  UnavailableVariantInChannel = "UNAVAILABLE_VARIANT_IN_CHANNEL",
  Unique = "UNIQUE",
  VoucherNotApplicable = "VOUCHER_NOT_APPLICABLE",
  ZeroQuantity = "ZERO_QUANTITY",
}
export type CheckoutCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** Slug of a channel in which to create a checkout. */
  channel?: InputMaybe<Scalars["String"]>;
  /** The customer's email address. */
  email?: InputMaybe<Scalars["String"]>;
  /** Checkout language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<CheckoutLineInput>;
  /** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
  shippingAddress?: InputMaybe<AddressInput>;
  /**
   * The checkout validation rules that can be changed.
   *
   * Added in Saleor 3.5.
   */
  validationRules?: InputMaybe<CheckoutValidationRules>;
};

export type CheckoutFragment = {
  id: string;
  quantity: number;
  totalPrice: {
    gross: { currency: string; amount: number };
    tax: { currency: string; amount: number };
  };
  subtotalPrice: { gross: { currency: string; amount: number } };
  lines: Array<{
    id: string;
    quantity: number;
    variant: {
      id: string;
      name: string;
      product: {
        id: string;
        slug: string;
        name: string;
        isAvailableForPurchase?: boolean | null;
        description?: string | null;
        seoTitle?: string | null;
        seoDescription?: string | null;
        updatedAt: string;
        pricing?: {
          priceRange?: {
            start?: { gross: { currency: string; amount: number } } | null;
            stop?: { gross: { currency: string; amount: number } } | null;
          } | null;
        } | null;
        media?: Array<{
          url: string;
          type: ProductMediaType;
          alt: string;
        }> | null;
        collections?: Array<{ name: string }> | null;
        variants?: Array<{
          id: string;
          name: string;
          attributes: Array<{
            attribute: {
              slug?: string | null;
              name?: string | null;
              choices?: {
                edges: Array<{ node: { name?: string | null } }>;
              } | null;
            };
            values: Array<{ name?: string | null }>;
          }>;
          pricing?: {
            price?: { gross: { currency: string; amount: number } } | null;
          } | null;
        }> | null;
      };
      attributes: Array<{
        attribute: {
          slug?: string | null;
          name?: string | null;
          choices?: { edges: Array<{ node: { name?: string | null } }> } | null;
        };
        values: Array<{ name?: string | null }>;
      }>;
      pricing?: {
        price?: { gross: { currency: string; amount: number } } | null;
      } | null;
    };
  }>;
};

export const CreateCheckoutDocument = new TypedDocumentString(`
    mutation CreateCheckout($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    errors {
      code
      message
      field
    }
    checkout {
      ...Checkout
    }
  }
}
    fragment Checkout on Checkout {
  id
  totalPrice {
    gross {
      currency
      amount
    }
    tax {
      currency
      amount
    }
  }
  subtotalPrice {
    gross {
      currency
      amount
    }
  }
  quantity
  lines {
    id
    quantity
    variant {
      ...Variant
      product {
        ...ProductDetails
      }
    }
  }
}
fragment ProductDetails on Product {
  id
  slug
  name
  isAvailableForPurchase
  description
  seoTitle
  seoDescription
  pricing {
    priceRange {
      start {
        gross {
          currency
          amount
        }
      }
      stop {
        gross {
          currency
          amount
        }
      }
    }
  }
  media {
    url(size: 1080)
    type
    alt
  }
  collections {
    name
  }
  updatedAt
  variants {
    ...Variant
  }
}
fragment Variant on ProductVariant {
  id
  name
  attributes {
    attribute {
      slug
      name
      choices(first: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
    values {
      name
    }
  }
  pricing {
    price {
      gross {
        currency
        amount
      }
    }
  }
}`) as unknown as TypedDocumentString<
  CreateCheckoutMutation,
  CreateCheckoutMutationVariables
>;

export type CreateCheckoutMutationVariables = Exact<{
  input: CheckoutCreateInput;
}>;

export type CreateCheckoutMutation = {
  checkoutCreate?: {
    errors: Array<{
      code: CheckoutErrorCode;
      message?: string | null;
      field?: string | null;
    }>;
    checkout?: {
      id: string;
      quantity: number;
      totalPrice: {
        gross: { currency: string; amount: number };
        tax: { currency: string; amount: number };
      };
      subtotalPrice: { gross: { currency: string; amount: number } };
      lines: Array<{
        id: string;
        quantity: number;
        variant: {
          id: string;
          name: string;
          product: {
            id: string;
            slug: string;
            name: string;
            isAvailableForPurchase?: boolean | null;
            description?: string | null;
            seoTitle?: string | null;
            seoDescription?: string | null;
            updatedAt: string;
            pricing?: {
              priceRange?: {
                start?: { gross: { currency: string; amount: number } } | null;
                stop?: { gross: { currency: string; amount: number } } | null;
              } | null;
            } | null;
            media?: Array<{
              url: string;
              type: ProductMediaType;
              alt: string;
            }> | null;
            collections?: Array<{ name: string }> | null;
            variants?: Array<{
              id: string;
              name: string;
              attributes: Array<{
                attribute: {
                  slug?: string | null;
                  name?: string | null;
                  choices?: {
                    edges: Array<{ node: { name?: string | null } }>;
                  } | null;
                };
                values: Array<{ name?: string | null }>;
              }>;
              pricing?: {
                price?: { gross: { currency: string; amount: number } } | null;
              } | null;
            }> | null;
          };
          attributes: Array<{
            attribute: {
              slug?: string | null;
              name?: string | null;
              choices?: {
                edges: Array<{ node: { name?: string | null } }>;
              } | null;
            };
            values: Array<{ name?: string | null }>;
          }>;
          pricing?: {
            price?: { gross: { currency: string; amount: number } } | null;
          } | null;
        };
      }>;
    } | null;
  } | null;
};

export type CheckoutAddLineMutationVariables = Exact<{
  checkoutId: Scalars["ID"];
  lines: Array<CheckoutLineInput> | CheckoutLineInput;
}>;

export type CheckoutAddLineMutation = {
  checkoutLinesAdd?: {
    errors: Array<{
      code: CheckoutErrorCode;
      message?: string | null;
      field?: string | null;
    }>;
    checkout?: {
      id: string;
      quantity: number;
      totalPrice: {
        gross: { currency: string; amount: number };
        tax: { currency: string; amount: number };
      };
      subtotalPrice: { gross: { currency: string; amount: number } };
      lines: Array<{
        id: string;
        quantity: number;
        variant: {
          id: string;
          name: string;
          product: {
            id: string;
            slug: string;
            name: string;
            isAvailableForPurchase?: boolean | null;
            description?: string | null;
            seoTitle?: string | null;
            seoDescription?: string | null;
            updatedAt: string;
            pricing?: {
              priceRange?: {
                start?: { gross: { currency: string; amount: number } } | null;
                stop?: { gross: { currency: string; amount: number } } | null;
              } | null;
            } | null;
            media?: Array<{
              url: string;
              type: ProductMediaType;
              alt: string;
            }> | null;
            collections?: Array<{ name: string }> | null;
            variants?: Array<{
              id: string;
              name: string;
              attributes: Array<{
                attribute: {
                  slug?: string | null;
                  name?: string | null;
                  choices?: {
                    edges: Array<{ node: { name?: string | null } }>;
                  } | null;
                };
                values: Array<{ name?: string | null }>;
              }>;
              pricing?: {
                price?: { gross: { currency: string; amount: number } } | null;
              } | null;
            }> | null;
          };
          attributes: Array<{
            attribute: {
              slug?: string | null;
              name?: string | null;
              choices?: {
                edges: Array<{ node: { name?: string | null } }>;
              } | null;
            };
            values: Array<{ name?: string | null }>;
          }>;
          pricing?: {
            price?: { gross: { currency: string; amount: number } } | null;
          } | null;
        };
      }>;
    } | null;
  } | null;
};
export const CheckoutAddLineDocument = new TypedDocumentString(`
    mutation CheckoutAddLine($checkoutId: ID!, $lines: [CheckoutLineInput!]!) {
  checkoutLinesAdd(id: $checkoutId, lines: $lines) {
    errors {
      code
      message
      field
    }
    checkout {
      ...Checkout
    }
  }
}
    fragment Checkout on Checkout {
  id
  totalPrice {
    gross {
      currency
      amount
    }
    tax {
      currency
      amount
    }
  }
  subtotalPrice {
    gross {
      currency
      amount
    }
  }
  quantity
  lines {
    id
    quantity
    variant {
      ...Variant
      product {
        ...ProductDetails
      }
    }
  }
}
fragment ProductDetails on Product {
  id
  slug
  name
  isAvailableForPurchase
  description
  seoTitle
  seoDescription
  pricing {
    priceRange {
      start {
        gross {
          currency
          amount
        }
      }
      stop {
        gross {
          currency
          amount
        }
      }
    }
  }
  media {
    url(size: 1080)
    type
    alt
  }
  collections {
    name
  }
  updatedAt
  variants {
    ...Variant
  }
}
fragment Variant on ProductVariant {
  id
  name
  attributes {
    attribute {
      slug
      name
      choices(first: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
    values {
      name
    }
  }
  pricing {
    price {
      gross {
        currency
        amount
      }
    }
  }
}`) as unknown as TypedDocumentString<
  CheckoutAddLineMutation,
  CheckoutAddLineMutationVariables
>;

export type CheckoutDeleteLineMutationVariables = Exact<{
  checkoutId: Scalars["ID"];
  lineIds: Array<Scalars["ID"]> | Scalars["ID"];
}>;

export type CheckoutDeleteLineMutation = {
  checkoutLinesDelete?: {
    errors: Array<{
      code: CheckoutErrorCode;
      message?: string | null;
      field?: string | null;
    }>;
    checkout?: {
      id: string;
      quantity: number;
      totalPrice: {
        gross: { currency: string; amount: number };
        tax: { currency: string; amount: number };
      };
      subtotalPrice: { gross: { currency: string; amount: number } };
      lines: Array<{
        id: string;
        quantity: number;
        variant: {
          id: string;
          name: string;
          product: {
            id: string;
            slug: string;
            name: string;
            isAvailableForPurchase?: boolean | null;
            description?: string | null;
            seoTitle?: string | null;
            seoDescription?: string | null;
            updatedAt: string;
            pricing?: {
              priceRange?: {
                start?: { gross: { currency: string; amount: number } } | null;
                stop?: { gross: { currency: string; amount: number } } | null;
              } | null;
            } | null;
            media?: Array<{
              url: string;
              type: ProductMediaType;
              alt: string;
            }> | null;
            collections?: Array<{ name: string }> | null;
            variants?: Array<{
              id: string;
              name: string;
              attributes: Array<{
                attribute: {
                  slug?: string | null;
                  name?: string | null;
                  choices?: {
                    edges: Array<{ node: { name?: string | null } }>;
                  } | null;
                };
                values: Array<{ name?: string | null }>;
              }>;
              pricing?: {
                price?: { gross: { currency: string; amount: number } } | null;
              } | null;
            }> | null;
          };
          attributes: Array<{
            attribute: {
              slug?: string | null;
              name?: string | null;
              choices?: {
                edges: Array<{ node: { name?: string | null } }>;
              } | null;
            };
            values: Array<{ name?: string | null }>;
          }>;
          pricing?: {
            price?: { gross: { currency: string; amount: number } } | null;
          } | null;
        };
      }>;
    } | null;
  } | null;
};
export const CheckoutDeleteLineDocument = new TypedDocumentString(`
    mutation CheckoutDeleteLine($checkoutId: ID!, $lineIds: [ID!]!) {
  checkoutLinesDelete(id: $checkoutId, linesIds: $lineIds) {
    errors {
      code
      message
      field
    }
    checkout {
      ...Checkout
    }
  }
}
    fragment Checkout on Checkout {
  id
  totalPrice {
    gross {
      currency
      amount
    }
    tax {
      currency
      amount
    }
  }
  subtotalPrice {
    gross {
      currency
      amount
    }
  }
  quantity
  lines {
    id
    quantity
    variant {
      ...Variant
      product {
        ...ProductDetails
      }
    }
  }
}
fragment ProductDetails on Product {
  id
  slug
  name
  isAvailableForPurchase
  description
  seoTitle
  seoDescription
  pricing {
    priceRange {
      start {
        gross {
          currency
          amount
        }
      }
      stop {
        gross {
          currency
          amount
        }
      }
    }
  }
  media {
    url(size: 1080)
    type
    alt
  }
  collections {
    name
  }
  updatedAt
  variants {
    ...Variant
  }
}
fragment Variant on ProductVariant {
  id
  name
  attributes {
    attribute {
      slug
      name
      choices(first: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
    values {
      name
    }
  }
  pricing {
    price {
      gross {
        currency
        amount
      }
    }
  }
}`) as unknown as TypedDocumentString<
  CheckoutDeleteLineMutation,
  CheckoutDeleteLineMutationVariables
>;
export type CheckoutLineUpdateInput = {
  /**
   * ID of the line.
   *
   * Added in Saleor 3.6.
   */
  lineId?: InputMaybe<Scalars["ID"]>;
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   */
  price?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** The number of items purchased. Optional for apps, required for any other users. */
  quantity?: InputMaybe<Scalars["Int"]>;
  variantId?: InputMaybe<Scalars["ID"]>;
};
export type CheckoutUpdateLineMutationVariables = Exact<{
  checkoutId: Scalars["ID"];
  lines: Array<CheckoutLineUpdateInput> | CheckoutLineUpdateInput;
}>;

export type CheckoutUpdateLineMutation = {
  checkoutLinesUpdate?: {
    errors: Array<{
      code: CheckoutErrorCode;
      message?: string | null;
      field?: string | null;
    }>;
    checkout?: {
      id: string;
      quantity: number;
      totalPrice: {
        gross: { currency: string; amount: number };
        tax: { currency: string; amount: number };
      };
      subtotalPrice: { gross: { currency: string; amount: number } };
      lines: Array<{
        id: string;
        quantity: number;
        variant: {
          id: string;
          name: string;
          product: {
            id: string;
            slug: string;
            name: string;
            isAvailableForPurchase?: boolean | null;
            description?: string | null;
            seoTitle?: string | null;
            seoDescription?: string | null;
            updatedAt: string;
            pricing?: {
              priceRange?: {
                start?: { gross: { currency: string; amount: number } } | null;
                stop?: { gross: { currency: string; amount: number } } | null;
              } | null;
            } | null;
            media?: Array<{
              url: string;
              type: ProductMediaType;
              alt: string;
            }> | null;
            collections?: Array<{ name: string }> | null;
            variants?: Array<{
              id: string;
              name: string;
              attributes: Array<{
                attribute: {
                  slug?: string | null;
                  name?: string | null;
                  choices?: {
                    edges: Array<{ node: { name?: string | null } }>;
                  } | null;
                };
                values: Array<{ name?: string | null }>;
              }>;
              pricing?: {
                price?: { gross: { currency: string; amount: number } } | null;
              } | null;
            }> | null;
          };
          attributes: Array<{
            attribute: {
              slug?: string | null;
              name?: string | null;
              choices?: {
                edges: Array<{ node: { name?: string | null } }>;
              } | null;
            };
            values: Array<{ name?: string | null }>;
          }>;
          pricing?: {
            price?: { gross: { currency: string; amount: number } } | null;
          } | null;
        };
      }>;
    } | null;
  } | null;
};

export const CheckoutUpdateLineDocument = new TypedDocumentString(`
    mutation CheckoutUpdateLine($checkoutId: ID!, $lines: [CheckoutLineUpdateInput!]!) {
  checkoutLinesUpdate(id: $checkoutId, lines: $lines) {
    errors {
      code
      message
      field
    }
    checkout {
      ...Checkout
    }
  }
}
    fragment Checkout on Checkout {
  id
  totalPrice {
    gross {
      currency
      amount
    }
    tax {
      currency
      amount
    }
  }
  subtotalPrice {
    gross {
      currency
      amount
    }
  }
  quantity
  lines {
    id
    quantity
    variant {
      ...Variant
      product {
        ...ProductDetails
      }
    }
  }
}
fragment ProductDetails on Product {
  id
  slug
  name
  isAvailableForPurchase
  description
  seoTitle
  seoDescription
  pricing {
    priceRange {
      start {
        gross {
          currency
          amount
        }
      }
      stop {
        gross {
          currency
          amount
        }
      }
    }
  }
  media {
    url(size: 1080)
    type
    alt
  }
  collections {
    name
  }
  updatedAt
  variants {
    ...Variant
  }
}
fragment Variant on ProductVariant {
  id
  name
  attributes {
    attribute {
      slug
      name
      choices(first: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
    values {
      name
    }
  }
  pricing {
    price {
      gross {
        currency
        amount
      }
    }
  }
}`) as unknown as TypedDocumentString<
  CheckoutUpdateLineMutation,
  CheckoutUpdateLineMutationVariables
>;
