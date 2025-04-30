import fs from "fs";
import { read } from "to-vfile";
import { matter } from "vfile-matter";

/**
 * 指定したディレクトリに含まれる .mdx ファイルから slug の一覧を抽出する
 * @param dir ディレクトリ名
 * @returns slug のリスト
 */
export const getArticleSlugs = (dir: fs.PathLike): string[] => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const files = entries
    .filter((item) => item.isFile())
    .filter((file) => file.name.endsWith(".mdx"));
  const slugs = files.map((file) => file.name.split(".")[0]);

  return slugs;
};

/**
 * 指定したディレクトリに含まれる .mdx ファイルから frontmatter 情報を抽出する
 * @param dir ディレクトリ名
 * @returns frontmatter のリスト
 */
export const getArticleMatters = async <T>(dir: fs.PathLike): Promise<T[]> => {
  const slugs = getArticleSlugs(dir);
  const promises = slugs.map(async (slug) => {
    const vf = await read(`${dir}/${slug}.mdx`);
    matter(vf, { strip: true });
    return vf.data.matter as T;
  });
  const matters = await Promise.all(promises);

  return matters;
};
