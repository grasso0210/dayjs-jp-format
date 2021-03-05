export const getJpYear = (date: Date): string => {
  let result: string;
  try {
    result = Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
      year: "2-digit",
      era: "long",
    }).format(date);
    const match = result.match(/^\D.+(元|\d+)/);
    if (!match) {
      throw Error();
    }
    result = match[0];
  } catch {
    result = "該当なし";
  }
  return result;
};

export const getJpEra = (date: Date): string => {
  let result: string;
  try {
    result = Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
      era: "long",
    })
      .format(date)
      .slice(0, 2);
  } catch {
    result = "不明";
  }
  return result;
};
