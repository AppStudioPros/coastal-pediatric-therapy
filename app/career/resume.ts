const RESUME_TYPES = new Map([
  ['pdf', 'application/pdf'],
  ['doc', 'application/msword'],
  ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
])

// Leave room for the other multipart fields under Vercel's 4.5 MB request limit.
export const RESUME_MAX_MB = 4
export const RESUME_ACCEPT = [...RESUME_TYPES.keys()].map(extension => `.${extension}`).join(',')

export function getResumeType(filename: string) {
  const extension = /\.([^.]+)$/.exec(filename)?.[1].toLowerCase() ?? ''
  return { extension, contentType: RESUME_TYPES.get(extension) }
}

export function validateResume(file: File) {
  const { contentType } = getResumeType(file.name)
  if (!contentType || (file.type && file.type !== 'application/octet-stream' && file.type !== contentType)) {
    return 'Please select a PDF, DOC, or DOCX r�sum�.'
  }
  if (file.size === 0) return 'The r�sum� file is empty. Please select another file.'
  if (file.size > RESUME_MAX_MB * 1_000_000) return `Your r�sum� must be ${RESUME_MAX_MB} MB or smaller.`
  return ''
}
