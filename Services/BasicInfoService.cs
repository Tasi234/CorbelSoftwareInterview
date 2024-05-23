using System.Runtime.InteropServices;

//This service returns the OS platform
public interface IBasicInfoService
{
  public string GetOperatingSystem();
}

public class BasicInfoService : IBasicInfoService
{
  public string GetOperatingSystem()
  {
    if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
    {
      return "OS_WINDOWS";
    }
    else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
    {
      return "OS_MAC";
    }
    else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
    {
      return "OS_LINUX";
    }
    else
    {
      return "OS_UNKNOWN";
    }
  }
}
