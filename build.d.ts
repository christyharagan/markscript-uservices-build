declare module MarkScript {
  interface UServicesRuntime {
    getService<T>(name: string): T
  }
  interface UServicesBuildConfig {
    middle: {
      host: string
      port: number
      specsPath: string
    }
  }
}

declare module 'markscript-uservices-build' {
  const uServicesPlugin
}
