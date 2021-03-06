import { importShowCopyDialog } from '../_components/dialog/asyncDialogs/importShowCopyDialog.js'
import { toast } from '../_components/toast/toast'

export async function copyText (text) {
  if (navigator.clipboard) { // not supported in all browsers
    try {
      await navigator.clipboard.writeText(text)
      toast.say('Copied to clipboard')
      return
    } catch (e) {
      console.error(e)
    }
  }

  const showCopyDialog = await importShowCopyDialog()
  showCopyDialog(text)
}
