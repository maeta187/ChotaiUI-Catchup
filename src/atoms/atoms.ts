import { atom } from 'jotai'

/**
 * Atomをまとめて定義することも可能
 * このファイルをimportすることで、複数のAtomをimportすることが可能
 * useAtomなどここでexportするとコンポーネントのimport文をを減らせそう
 */
export const countAtom = atom(0)
export const nameAtom = atom('Quill')
